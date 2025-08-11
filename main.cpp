#include <iostream>
#include <string>
#include <vector>
#include <cstdlib>
#include <random>
#include <sstream>
#include <fstream>
#include "DatabaseManager.hpp"
#include "CodeGenerator.hpp"

std::string generateSecureKey(int length) {
    const std::string chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()";
    std::random_device rd;
    std::mt19937 generator(rd());
    std::uniform_int_distribution<> distribution(0, chars.length() - 1);

    std::stringstream ss;
    for (int i = 0; i < length; ++i) {
        ss << chars[distribution(generator)];
    }
    return ss.str();
}

void runCommand(const std::string& command, bool wait = true) {
    std::cout << "Ejecutando: " << command << std::endl;
    std::string cmd_to_run = command;
#ifdef _WIN32
    if (!wait) {
        cmd_to_run = "start \"NestJS API\" cmd /c \"" + command + "\"";
    }
#else
    if (!wait) {
        cmd_to_run = command + " &";
    }
#endif
    system(cmd_to_run.c_str());
}

void printApiRoutes(const std::vector<Table>& tables) {
    std::cout << "\n--- Rutas de la API Generadas ---" << std::endl;
    std::cout << "URL Base: http://localhost:3000\n" << std::endl;

    for (const auto& table : tables) {
        if (table.isUserTable) {
            std::cout << "Autenticación y Registro de Usuarios:" << std::endl;
            std::cout << "  POST   /auth/login        (Requiere {nombreemail, password} en el cuerpo)" << std::endl;
            std::cout << "  POST   /" << table.name << "           (Registra un nuevo usuario)" << std::endl;
        }
    }

    std::cout << "\nEndpoints CRUD (la mayoría requiere Token de Portador):" << std::endl;
    for (const auto& table : tables) {
        std::string route = "/" + table.name;
        std::cout << "Recurso: " << table.className << std::endl;
        std::cout << "  GET    " << route << std::endl;
        std::cout << "  GET    " << route << "/:" << table.primaryKey.name << std::endl;
        std::cout << "  POST   " << route << std::endl;
        std::cout << "  PATCH  " << route << "/:" << table.primaryKey.name << std::endl;
        std::cout << "  DELETE " << route << "/:" << table.primaryKey.name << std::endl;
        std::cout << "--------------------------------" << std::endl;
    }
}

int main() {
    const std::string connInfo = "postgresql://root:root@localhost:5450/nest_db";
    DatabaseManager dbManager(connInfo);

    if (!dbManager.isConnected()) {
        std::cerr << "No se pudo conectar a la base de datos. Asegúrate de que el contenedor Docker esté en ejecución." << std::endl;
        return 1;
    }
    std::cout << "Conectado exitosamente a PostgreSQL." << std::endl;

    std::vector<Table> tables = dbManager.getTables();
    if (tables.empty()) {
        std::cerr << "No se encontraron tablas en la base de datos." << std::endl;
        return 1;
    }

    const std::string outputDir = "nest-api";
    CodeGenerator generator(outputDir);
    generator.generate(tables);

    std::cout << "\nGenerando clave JWT segura y archivo .env..." << std::endl;
    std::string jwtKey = generateSecureKey(64);
    std::string envContent = "JWT_SECRET=" + jwtKey + "\n";

    std::ofstream envFile(outputDir + "/.env");
    envFile << envContent;
    envFile.close();

    std::ofstream gitignoreFile(outputDir + "/.gitignore");
    gitignoreFile << "node_modules\n";
    gitignoreFile << ".env\n";
    gitignoreFile << "dist\n";
    gitignoreFile.close();

    std::cout << "\n--- Configurando el Proyecto Nest.js ---" << std::endl;
    runCommand("cd " + outputDir + " && npm install");

    std::cout << "\n--- Configuración de la API Completa ---" << std::endl;
    printApiRoutes(tables);
    std::cout << "\nIniciando el servidor de la API en una nueva ventana..." << std::endl;

    runCommand("cd " + outputDir + " && npm run start:dev", false);

    return 0;
}