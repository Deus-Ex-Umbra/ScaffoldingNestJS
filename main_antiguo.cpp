/*#include <iostream>
#include <string>
#include <vector>
#include <cstdlib>
#include <fstream>
#include <sstream>
#include "GestorBaseDatos.hpp"
#include "GeneradorCodigo.hpp"

void ejecutarComando(const std::string& comando, bool esperar = true) {
    std::cout << "Ejecutando comando: " << comando << std::endl;
    std::string comando_a_ejecutar = comando;
#ifdef _WIN32
    if (!esperar) {
        comando_a_ejecutar = "start \"NestJS API\" cmd /c \"" + comando + "\"";
    }
#else
    if (!esperar) {
        comando_a_ejecutar = comando + " &";
    }
#endif
    int resultado = system(comando_a_ejecutar.c_str());
    if (resultado != 0) {
        std::cerr << "Advertencia: El comando anterior finalizo con un codigo de error: " << resultado << std::endl;
    }
}

void imprimirRutasApi(const std::vector<Tabla>& tablas) {
    std::cout << "\n--- Rutas de la API Generadas ---" << std::endl;
    std::cout << "URL Base: http://localhost:3000\n" << std::endl;

    for (const auto& tabla : tablas) {
        if (tabla.es_tabla_usuario) {
            std::cout << "Autenticacion y Registro de Usuarios:" << std::endl;
            std::cout << "  POST   /autenticacion/login     (Requiere {" << tabla.campo_email_encontrado << ", " << tabla.campo_contrasena_encontrado << "})" << std::endl;
            break;
        }
    }

    std::cout << "\nEndpoints CRUD Generados:" << std::endl;
    for (const auto& tabla : tablas) {
        std::string ruta = "/" + tabla.nombre_archivo;
        std::string proteccion_info = tabla.es_protegida ? " (Protegida con JWT)" : " (Ruta Publica)";
        std::cout << "Recurso: " << tabla.nombre_clase << proteccion_info << std::endl;
        std::cout << "  POST   " << ruta << "                (Crear nuevo)" << std::endl;
        std::cout << "  GET    " << ruta << "                (Obtener todos)" << std::endl;
        std::cout << "  GET    " << ruta << "/:id" << "                 (Obtener por ID)" << std::endl;
        std::cout << "  PATCH  " << ruta << "/:id" << "                 (Actualizar por ID)" << std::endl;
        std::cout << "  DELETE " << ruta << "/:id" << "                 (Eliminar por ID)" << std::endl;
        std::cout << "------------------------------------------" << std::endl;
    }
}

int main() {
    const std::string DB_HOST = "localhost";
    const std::string DB_PUERTO = "5450";
    const std::string DB_NOMBRE = "nest_db";
    const std::string DB_USUARIO = "root";
    const std::string DB_CONTRASENA = "root";
    const std::string CLAVE_SECRETA_JWT = "98cafb3039ea4bcfc65bbd8ae6258ceae2e4eb0f827109891514cdf16305d851693e502e93fb602de98c402bcead3d7132ddcb1d5c5aa7639cc5318ff286b4ac";
    std::stringstream ss_conexion;
    ss_conexion << "postgresql://" << DB_USUARIO << ":" << DB_CONTRASENA << "@" << DB_HOST << ":" << DB_PUERTO << "/" << DB_NOMBRE;
    const std::string INFO_CONEXION = ss_conexion.str();

    std::cout << "Intentando conectar con la base de datos en: " << INFO_CONEXION << std::endl;
    GestorBaseDatos gestor_db(INFO_CONEXION);

    if (!gestor_db.estaConectado()) {
        std::cerr << "No se pudo continuar debido a un error de conexion con la base de datos." << std::endl;
        return 1;
    }
    std::cout << "Conectado exitosamente a la base de datos PostgreSQL." << std::endl;

    std::vector<Tabla> esquema_tablas = gestor_db.obtenerEsquemaTablas();
    if (esquema_tablas.empty()) {
        std::cerr << "No se encontraron tablas en el esquema 'public' de la base de datos." << std::endl;
        return 1;
    }

    const std::string dir_salida = "api-generada-nest";
    GeneradorCodigo generador(dir_salida);
    generador.generarProyectoCompleto(esquema_tablas);

    std::cout << "\nCreando archivo .env con la clave secreta para JWT..." << std::endl;
    std::ofstream archivo_env(dir_salida + "/.env");
    archivo_env << "JWT_SECRET=" + CLAVE_SECRETA_JWT + "\n";
    archivo_env.close();

    std::cout << "\n--- Iniciando configuracion del proyecto Nest.js (npm install) ---" << std::endl;
    ejecutarComando("cd " + dir_salida + " && npm install");

    std::cout << "\n--- !Configuracion de la API Completa! ---" << std::endl;
    imprimirRutasApi(esquema_tablas);

    std::cout << "\nIniciando el servidor de desarrollo en una nueva ventana..." << std::endl;
    std::cout << "Puedes detenerlo cerrando la nueva ventana o con Ctrl+C en ella." << std::endl;
    ejecutarComando("cd " + dir_salida + " && npm run start:dev", false);

    return 0;
}*/