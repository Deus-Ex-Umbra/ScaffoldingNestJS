#pragma once
#include <string>
#include <vector>
#include <nlohmann/json.hpp>
#include "Models.hpp"

class CodeGenerator {
public:
    CodeGenerator(const std::string& outputDir);
    void generate(const std::vector<Table>& tables);

private:
    std::string outputDir;

    void generateBaseFiles(const nlohmann::json& modules_data);
    void generateAuthModule(const Table& userTable);
    void generateCrud(const Table& table);
    void writeFile(const std::string& path, const std::string& content);
    std::string renderTemplate(const std::string& templatePath, const nlohmann::json& data);
};