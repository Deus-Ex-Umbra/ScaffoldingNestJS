#include "CodeGenerator.hpp"
#include <inja/inja.hpp>
#include <nlohmann/json.hpp>
#include <filesystem>
#include <fstream>
#include <iostream>
#include <sstream>

using json = nlohmann::json;
namespace fs = std::filesystem;

CodeGenerator::CodeGenerator(const std::string& outputDir) : outputDir(outputDir) {
    fs::create_directories(outputDir);
}

std::string CodeGenerator::renderTemplate(const std::string& templatePath, const json& data) {
    inja::Environment local_env;
    try {
        std::ifstream file(templatePath);
        if (!file.is_open()) {
            std::cerr << "Error Crítico: No se pudo abrir el archivo de plantilla: " << templatePath << std::endl;
            return "";
        }
        std::stringstream buffer;
        buffer << file.rdbuf();
        return local_env.render(buffer.str(), data);
    }
    catch (const std::exception& e) {
        std::cerr << "Error al renderizar la plantilla " << templatePath << ": " << e.what() << std::endl;
        return "";
    }
}

void CodeGenerator::writeFile(const std::string& path, const std::string& content) {
    fs::path filePath(path);
    if (!filePath.parent_path().empty()) {
        fs::create_directories(filePath.parent_path());
    }
    std::ofstream file(filePath);
    file << content;
}

void CodeGenerator::generateBaseFiles(const json& modules_data) {
    std::cout << "Generando archivos base del proyecto..." << std::endl;
    writeFile(outputDir + "/package.json", renderTemplate("PackageJson.tpl", {}));
    writeFile(outputDir + "/src/main.ts", renderTemplate("Main.tpl", {}));
    writeFile(outputDir + "/src/database/typeorm.config.ts", renderTemplate("TypeOrmConfig.tpl", {}));
    writeFile(outputDir + "/src/app.module.ts", renderTemplate("AppModule.tpl", modules_data));
    std::cout << "Generando archivos de configuración de NestJS..." << std::endl;
    writeFile(outputDir + "/tsconfig.json", renderTemplate("TsconfigJson.tpl", {}));
    writeFile(outputDir + "/tsconfig.build.json", renderTemplate("TsconfigBuildJson.tpl", {}));
    writeFile(outputDir + "/nest-cli.json", renderTemplate("NestCliJson.tpl", {}));
    writeFile(outputDir + "/.eslintrc.js", renderTemplate("Eslintrc.tpl", {}));
    writeFile(outputDir + "/.prettierrc", renderTemplate("Prettierrc.tpl", {}));
}

void CodeGenerator::generateAuthModule(const Table& userTable) {
    std::cout << "Generando módulo de autenticación JWT para la tabla: " << userTable.name << std::endl;
    fs::create_directories(outputDir + "/src/auth/dto");
    fs::create_directories(outputDir + "/src/auth/strategies");
    fs::create_directories(outputDir + "/src/auth/guards");
    json data;
    data["userModule"]["moduleName"] = userTable.className + "Module";
    data["userModule"]["serviceName"] = userTable.className + "Service";
    data["userModule"]["entityName"] = userTable.className;
    data["userModule"]["folderName"] = userTable.fileName;
    data["userModule"]["fileName"] = userTable.fileName;
    writeFile(outputDir + "/src/auth/auth.module.ts", renderTemplate("AuthModule.tpl", data));
    writeFile(outputDir + "/src/auth/auth.controller.ts", renderTemplate("AuthController.tpl", {}));
    writeFile(outputDir + "/src/auth/auth.service.ts", renderTemplate("AuthService.tpl", data));
    writeFile(outputDir + "/src/auth/strategies/jwt.strategy.ts", renderTemplate("JwtStrategy.tpl", {}));
    writeFile(outputDir + "/src/auth/dto/login.dto.ts", renderTemplate("LoginDto.tpl", {}));
    writeFile(outputDir + "/src/auth/guards/jwt-auth.guard.ts", renderTemplate("JwtAuthGuard.tpl", {}));
}

void CodeGenerator::generateCrud(const Table& table) {
    std::string modulePath = outputDir + "/src/" + table.fileName;
    fs::create_directories(modulePath + "/entities");
    fs::create_directories(modulePath + "/dto");

    json data;
    json& tableData = data["table"];
    tableData["name"] = table.name;
    tableData["className"] = table.className;
    tableData["camelCaseName"] = table.camelCaseName;
    tableData["fileName"] = table.fileName;
    tableData["isUserTable"] = table.isUserTable;
    tableData["primaryKey"]["name"] = table.primaryKey.name;
    tableData["primaryKey"]["camelCaseName"] = table.primaryKey.camelCaseName;
    tableData["primaryKey"]["tsType"] = table.primaryKey.tsType;
    const std::vector<std::string> publicTables = {
        "usuarios", "personas", "paises", "departamentos", "provincias",
        "localidades", "sexos", "grupos_sanguineos", "estados_civiles",
        "emision_cedulas"
    };
    bool isPublic = false;
    for (const auto& publicTable : publicTables) {
        if (table.name == publicTable) {
            isPublic = true;
            break;
        }
    }
    tableData["isProtected"] = !isPublic;
    std::stringstream propertiesStream;
    for (const auto& col : table.columns) {
        if (col.isPrimary) {
            propertiesStream << "    @PrimaryGeneratedColumn({ name: '" << col.name << "' })\n";
        }
        else {
            propertiesStream << "    @Column({ name: '" << col.name << "', type: '" << col.dbType << "', nullable: " << (col.isNullable ? "true" : "false") << " })\n";
        }
        propertiesStream << "    " << col.camelCaseName << ": " << col.tsType << ";\n\n";
    }
    tableData["properties"] = propertiesStream.str();

    std::stringstream dtoPropertiesStream;
    for (const auto& col : table.columns) {
        if (!col.isPrimary) {
            dtoPropertiesStream << "    " << col.camelCaseName << "?: " << col.tsType << ";\n";
        }
    }
    tableData["dtoProperties"] = dtoPropertiesStream.str();

    if (table.isUserTable) {
        tableData["bcryptImport"] = "import * as bcrypt from 'bcrypt';";
        tableData["validatePasswordMethod"] = R"(
    async validatePassword(password: string): Promise<boolean> {
        const { password: hashedPassword } = this;
        return bcrypt.compare(password, hashedPassword);
    }
)";
        tableData["findByNameMethod"] = R"(
  async findByNombreemail(nombreemail: string): Promise<Usuario | undefined> {
    return this.usuarioRepository.findOneBy({ nombreemail });
  }
)";
        tableData["exportsLine"] = "exports: [" + table.className + "Service],";

        std::stringstream createMethodStream;
        createMethodStream << "  async create(create" << table.className << "Dto: Create" << table.className << "Dto): Promise<" << table.className << "> {\n";
        createMethodStream << "    const salt = await bcrypt.genSalt();\n";
        createMethodStream << "    const hashedPassword = await bcrypt.hash((create" << table.className << "Dto as any).password, salt);\n";
        createMethodStream << "    const user = this." << table.camelCaseName << "Repository.create({ ...create" << table.className << "Dto, password: hashedPassword });\n";
        createMethodStream << "    return this." << table.camelCaseName << "Repository.save(user);\n";
        createMethodStream << "  }";
        tableData["createMethod"] = createMethodStream.str();

    }
    else {
        tableData["bcryptImport"] = "";
        tableData["validatePasswordMethod"] = "";
        tableData["findByNameMethod"] = "";
        tableData["exportsLine"] = "";

        std::stringstream createMethodStream;
        createMethodStream << "  create(create" << table.className << "Dto: Create" << table.className << "Dto) {\n";
        createMethodStream << "    const newRecord = this." << table.camelCaseName << "Repository.create(create" << table.className << "Dto);\n";
        createMethodStream << "    return this." << table.camelCaseName << "Repository.save(newRecord);\n";
        createMethodStream << "  }";
        tableData["createMethod"] = createMethodStream.str();
    }

    writeFile(modulePath + "/entities/" + table.fileName + ".entity.ts", renderTemplate("Entity.tpl", data));
    writeFile(modulePath + "/dto/create-" + table.fileName + ".dto.ts", renderTemplate("CreateDto.tpl", data));
    writeFile(modulePath + "/dto/update-" + table.fileName + ".dto.ts", renderTemplate("UpdateDto.tpl", data));
    writeFile(modulePath + "/" + table.fileName + ".service.ts", renderTemplate("Service.tpl", data));
    writeFile(modulePath + "/" + table.fileName + ".controller.ts", renderTemplate("Controller.tpl", data));
    writeFile(modulePath + "/" + table.fileName + ".module.ts", renderTemplate("Module.tpl", data));
}

void CodeGenerator::generate(const std::vector<Table>& tables) {
    const Table* userTable = nullptr;
    json modules_data;
    for (const auto& table : tables) {
        json mod;
        mod["className"] = table.className + "Module";
        mod["folderName"] = table.fileName;
        mod["fileName"] = table.fileName;
        modules_data["modules"].push_back(mod);
        if (table.isUserTable) {
            userTable = &table;
        }
    }
    if (userTable) {
        json authMod;
        authMod["className"] = "AuthModule";
        authMod["folderName"] = "auth";
        authMod["fileName"] = "auth";
        modules_data["modules"].push_back(authMod);
    }
    generateBaseFiles(modules_data);
    if (userTable) {
        generateAuthModule(*userTable);
    }
    for (const auto& table : tables) {
        std::cout << "Generando CRUD para la tabla: " << table.name << std::endl;
        generateCrud(table);
    }
    std::cout << "\nGeneración completa. El proyecto se encuentra en el directorio '" << outputDir << "'." << std::endl;
}