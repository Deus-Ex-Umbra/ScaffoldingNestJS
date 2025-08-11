#pragma once
#include <string>
#include <vector>

struct Column {
    std::string name;
    std::string camelCaseName;
    std::string dbType;
    std::string tsType;
    bool isNullable;
    bool isPrimary = false;
};

struct Table {
    std::string name;
    std::string className;
    std::string camelCaseName;
    std::string fileName;
    Column primaryKey;
    std::vector<Column> columns;
    bool isUserTable = false;
};