#include "DatabaseManager.hpp"
#include <iostream>
#include <stdexcept>
#include <algorithm>
#include <cctype>

DatabaseManager::DatabaseManager(const std::string& connInfo) {
    connection = PQconnectdb(connInfo.c_str());
    if (PQstatus(connection) != CONNECTION_OK) {
        std::cerr << "Error de conexión a la base de datos: " << PQerrorMessage(connection) << std::endl;
        PQfinish(connection);
        connection = nullptr;
    }
}

DatabaseManager::~DatabaseManager() {
    if (connection) {
        PQfinish(connection);
    }
}

bool DatabaseManager::isConnected() {
    return connection != nullptr && PQstatus(connection) == CONNECTION_OK;
}

std::string DatabaseManager::toPascalCase(const std::string& input) {
    std::string result = "";
    bool capitalize = true;
    for (char c : input) {
        if (c == '_') {
            capitalize = true;
        }
        else {
            if (capitalize) {
                result += toupper(c);
                capitalize = false;
            }
            else {
                result += c;
            }
        }
    }
    if (result.length() > 3 && result.substr(result.length() - 2) == "es") {
        result.pop_back();
        result.pop_back();
    }
    else if (result.length() > 1 && result.back() == 's') {
        result.pop_back();
    }
    return result;
}

std::string DatabaseManager::toCamelCase(const std::string& input) {
    std::string result = "";
    bool capitalize = false;
    for (char c : input) {
        if (c == '_') {
            capitalize = true;
        }
        else {
            if (capitalize) {
                result += toupper(c);
                capitalize = false;
            }
            else {
                result += c;
            }
        }
    }
    return result;
}

std::string DatabaseManager::toKebabCase(const std::string& pascalCaseInput) {
    std::string result = "";
    if (!pascalCaseInput.empty()) {
        result += tolower(pascalCaseInput[0]);
        for (size_t i = 1; i < pascalCaseInput.length(); ++i) {
            if (isupper(pascalCaseInput[i])) {
                result += '-';
            }
            result += tolower(pascalCaseInput[i]);
        }
    }
    return result;
}

std::string DatabaseManager::mapPostgresTypeToTs(const std::string& dbType) {
    if (dbType.find("char") != std::string::npos || dbType.find("text") != std::string::npos) return "string";
    if (dbType.find("int") != std::string::npos || dbType.find("serial") != std::string::npos || dbType.find("numeric") != std::string::npos || dbType.find("float") != std::string::npos || dbType.find("double") != std::string::npos || dbType.find("real") != std::string::npos) return "number";
    if (dbType.find("bool") != std::string::npos) return "boolean";
    if (dbType.find("date") != std::string::npos || dbType.find("time") != std::string::npos) return "Date";
    if (dbType.find("json") != std::string::npos) return "any";
    return "any";
}

std::vector<std::string> DatabaseManager::getTableNames() {
    std::vector<std::string> tables;
    const char* query = "SELECT tablename FROM pg_catalog.pg_tables WHERE schemaname = 'public';";
    PGresult* res = PQexec(connection, query);
    if (PQresultStatus(res) != PGRES_TUPLES_OK) {
        std::cerr << "Falló la consulta para obtener nombres de tablas: " << PQerrorMessage(connection) << std::endl;
        PQclear(res);
        return tables;
    }
    for (int i = 0; i < PQntuples(res); i++) {
        tables.push_back(PQgetvalue(res, i, 0));
    }
    PQclear(res);
    return tables;
}

std::vector<Column> DatabaseManager::getColumnsForTable(const std::string& tableName) {
    std::vector<Column> columns;
    std::string query =
        "SELECT c.column_name, c.data_type, c.is_nullable, "
        "       (SELECT count(kcu.column_name) "
        "        FROM information_schema.key_column_usage AS kcu "
        "        JOIN information_schema.table_constraints AS tc "
        "        ON kcu.constraint_name = tc.constraint_name "
        "        WHERE kcu.table_name=c.table_name AND kcu.column_name=c.column_name "
        "              AND tc.constraint_type='PRIMARY KEY') as is_primary "
        "FROM information_schema.columns AS c "
        "WHERE c.table_schema = 'public' AND c.table_name = '" + tableName + "' ORDER BY c.ordinal_position;";

    PGresult* res = PQexec(connection, query.c_str());

    if (PQresultStatus(res) != PGRES_TUPLES_OK) {
        std::cerr << "Falló la consulta de columnas para la tabla " << tableName << ": " << PQerrorMessage(connection) << std::endl;
        PQclear(res);
        return columns;
    }

    for (int i = 0; i < PQntuples(res); i++) {
        Column col;
        col.name = PQgetvalue(res, i, 0);
        col.camelCaseName = toCamelCase(col.name);
        col.dbType = PQgetvalue(res, i, 1);
        col.tsType = mapPostgresTypeToTs(col.dbType);
        col.isNullable = (std::string(PQgetvalue(res, i, 2)) == "YES");
        col.isPrimary = (std::string(PQgetvalue(res, i, 3)) == "1");
        columns.push_back(col);
    }

    PQclear(res);
    return columns;
}

std::vector<Table> DatabaseManager::getTables() {
    std::vector<Table> allTables;
    std::vector<std::string> tableNames = getTableNames();
    const std::vector<std::string> userTableNames = { "user", "users", "usuario", "usuarios" };

    for (const auto& name : tableNames) {
        Table table;
        table.name = name;
        table.className = toPascalCase(name);
        table.camelCaseName = toCamelCase(table.className);
        table.camelCaseName[0] = tolower(table.camelCaseName[0]);
        table.fileName = toKebabCase(table.className);
        table.columns = getColumnsForTable(name);

        bool pkFound = false;
        for (const auto& col : table.columns) {
            if (col.isPrimary) {
                table.primaryKey = col;
                pkFound = true;
                break;
            }
        }
        if (!pkFound && !table.columns.empty()) {
            table.primaryKey = table.columns[0];
        }

        std::string lower_name = name;
        std::transform(lower_name.begin(), lower_name.end(), lower_name.begin(), ::tolower);
        if (std::find(userTableNames.begin(), userTableNames.end(), lower_name) != userTableNames.end()) {
            table.isUserTable = true;
        }

        allTables.push_back(table);
    }
    return allTables;
}