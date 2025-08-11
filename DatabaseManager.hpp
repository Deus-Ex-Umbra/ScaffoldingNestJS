#pragma once
#include <string>
#include <vector>
#include <memory>
#include "Models.hpp"
#include <libpq-fe.h>

class DatabaseManager {
public:
    DatabaseManager(const std::string& connInfo);
    ~DatabaseManager();
    bool isConnected();
    std::vector<Table> getTables();

private:
    PGconn* connection;
    std::string toPascalCase(const std::string& input);
    std::string toCamelCase(const std::string& pascalCaseInput);
    std::string toKebabCase(const std::string& pascalCaseInput);
    std::string mapPostgresTypeToTs(const std::string& dbType);
    std::vector<std::string> getTableNames();
    std::vector<Column> getColumnsForTable(const std::string& tableName);
};