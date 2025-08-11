import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { typeOrmConfig } from './database/typeorm.config';
import { UniversidadModule } from './universidad/universidad.module';
import { ConfiguracionModule } from './configuracion/configuracion.module';
import { AreaModule } from './area/area.module';
import { FacultadModule } from './facultad/facultad.module';
import { ModuloModule } from './modulo/modulo.module';
import { MenusPrincipalModule } from './menus-principal/menus-principal.module';
import { MenuModule } from './menu/menu.module';
import { RolModule } from './rol/rol.module';
import { RolesMenusPrincipalModule } from './roles-menus-principal/roles-menus-principal.module';
import { CampuModule } from './campu/campu.module';
import { EdificioModule } from './edificio/edificio.module';
import { FacultadesEdificioModule } from './facultades-edificio/facultades-edificio.module';
import { BloquModule } from './bloqu/bloqu.module';
import { PisosBloquModule } from './pisos-bloqu/pisos-bloqu.module';
import { PisoModule } from './piso/piso.module';
import { DepartamentoModule } from './departamento/departamento.module';
import { AmbientModule } from './ambient/ambient.module';
import { TiposAmbientModule } from './tipos-ambient/tipos-ambient.module';
import { PaisModule } from './pais/pais.module';
import { ProvinciaModule } from './provincia/provincia.module';
import { LocalidadModule } from './localidad/localidad.module';
import { PersonaModule } from './persona/persona.module';
import { SexoModule } from './sexo/sexo.module';
import { GruposSanguineoModule } from './grupos-sanguineo/grupos-sanguineo.module';
import { EstadosCivilModule } from './estados-civil/estados-civil.module';
import { EmisionCedulaModule } from './emision-cedula/emision-cedula.module';
import { UsuarioModule } from './usuario/usuario.module';
import { NivelesAcademicoModule } from './niveles-academico/niveles-academico.module';
import { CarreraModule } from './carrera/carrera.module';
import { CarrerasNivelesAcademicoModule } from './carreras-niveles-academico/carreras-niveles-academico.module';
import { SedModule } from './sed/sed.module';
import { ModalidadModule } from './modalidad/modalidad.module';
import { TiposPersonaModule } from './tipos-persona/tipos-persona.module';
import { PersonasAlumnoModule } from './personas-alumno/personas-alumno.module';
import { PersonasDocentModule } from './personas-docent/personas-docent.module';
import { PersonasAdministrativoModule } from './personas-administrativo/personas-administrativo.module';
import { PersonasDirectoresCarreraModule } from './personas-directores-carrera/personas-directores-carrera.module';
import { PersonasDecanoModule } from './personas-decano/personas-decano.module';
import { TiposEvaluacionesNotaModule } from './tipos-evaluaciones-nota/tipos-evaluaciones-nota.module';
import { PersonasDirectoresPosgradoModule } from './personas-directores-posgrado/personas-directores-posgrado.module';
import { PersonasFacultadesAdministradorModule } from './personas-facultades-administrador/personas-facultades-administrador.module';
import { PersonasRolModule } from './personas-rol/personas-rol.module';
import { PosgradosProgramaModule } from './posgrados-programa/posgrados-programa.module';
import { PersonasAlumnosPosgradoModule } from './personas-alumnos-posgrado/personas-alumnos-posgrado.module';
import { CuentasCargosPosgradoModule } from './cuentas-cargos-posgrado/cuentas-cargos-posgrado.module';
import { CuentasCargosPosgradosConceptoModule } from './cuentas-cargos-posgrados-concepto/cuentas-cargos-posgrados-concepto.module';
import { CuentasConceptoModule } from './cuentas-concepto/cuentas-concepto.module';
import { GestionesPeriodoModule } from './gestiones-periodo/gestiones-periodo.module';
import { DiaModule } from './dia/dia.module';
import { CuentasCargosConceptosPosgradoModule } from './cuentas-cargos-conceptos-posgrado/cuentas-cargos-conceptos-posgrado.module';
import { PosgradosContratoModule } from './posgrados-contrato/posgrados-contrato.module';
import { PosgradosContratosDetallModule } from './posgrados-contratos-detall/posgrados-contratos-detall.module';
import { PosgradosContratosDetallesDesgloseModule } from './posgrados-contratos-detalles-desglose/posgrados-contratos-detalles-desglose.module';
import { PosgradosTransaccionModule } from './posgrados-transaccion/posgrados-transaccion.module';
import { PosgradosTransaccionesDetallModule } from './posgrados-transacciones-detall/posgrados-transacciones-detall.module';
import { PosgradosTransaccionesDetallesDesgloseModule } from './posgrados-transacciones-detalles-desglose/posgrados-transacciones-detalles-desglose.module';
import { MontosExcedentModule } from './montos-excedent/montos-excedent.module';
import { NivelesAcademicosTramitesDocumentoModule } from './niveles-academicos-tramites-documento/niveles-academicos-tramites-documento.module';
import { TramitesDocumentoModule } from './tramites-documento/tramites-documento.module';
import { PosgradoAlumnosDocumentoModule } from './posgrado-alumnos-documento/posgrado-alumnos-documento.module';
import { ExtractosBancarioModule } from './extractos-bancario/extractos-bancario.module';
import { PosgradoMateriaModule } from './posgrado-materia/posgrado-materia.module';
import { PosgradoNivelModule } from './posgrado-nivel/posgrado-nivel.module';
import { PosgradoTiposEvaluacionesNotaModule } from './posgrado-tipos-evaluaciones-nota/posgrado-tipos-evaluaciones-nota.module';
import { PosgradoAsignacionesDocentModule } from './posgrado-asignaciones-docent/posgrado-asignaciones-docent.module';
import { PosgradoCalificacionModule } from './posgrado-calificacion/posgrado-calificacion.module';
import { PosgradoAsignacionesHorarioModule } from './posgrado-asignaciones-horario/posgrado-asignaciones-horario.module';
import { HorasClasModule } from './horas-clas/horas-clas.module';
import { PosgradoClasesVideoModule } from './posgrado-clases-video/posgrado-clases-video.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(typeOrmConfig),
    UniversidadModule,
    ConfiguracionModule,
    AreaModule,
    FacultadModule,
    ModuloModule,
    MenusPrincipalModule,
    MenuModule,
    RolModule,
    RolesMenusPrincipalModule,
    CampuModule,
    EdificioModule,
    FacultadesEdificioModule,
    BloquModule,
    PisosBloquModule,
    PisoModule,
    DepartamentoModule,
    AmbientModule,
    TiposAmbientModule,
    PaisModule,
    ProvinciaModule,
    LocalidadModule,
    PersonaModule,
    SexoModule,
    GruposSanguineoModule,
    EstadosCivilModule,
    EmisionCedulaModule,
    UsuarioModule,
    NivelesAcademicoModule,
    CarreraModule,
    CarrerasNivelesAcademicoModule,
    SedModule,
    ModalidadModule,
    TiposPersonaModule,
    PersonasAlumnoModule,
    PersonasDocentModule,
    PersonasAdministrativoModule,
    PersonasDirectoresCarreraModule,
    PersonasDecanoModule,
    TiposEvaluacionesNotaModule,
    PersonasDirectoresPosgradoModule,
    PersonasFacultadesAdministradorModule,
    PersonasRolModule,
    PosgradosProgramaModule,
    PersonasAlumnosPosgradoModule,
    CuentasCargosPosgradoModule,
    CuentasCargosPosgradosConceptoModule,
    CuentasConceptoModule,
    GestionesPeriodoModule,
    DiaModule,
    CuentasCargosConceptosPosgradoModule,
    PosgradosContratoModule,
    PosgradosContratosDetallModule,
    PosgradosContratosDetallesDesgloseModule,
    PosgradosTransaccionModule,
    PosgradosTransaccionesDetallModule,
    PosgradosTransaccionesDetallesDesgloseModule,
    MontosExcedentModule,
    NivelesAcademicosTramitesDocumentoModule,
    TramitesDocumentoModule,
    PosgradoAlumnosDocumentoModule,
    ExtractosBancarioModule,
    PosgradoMateriaModule,
    PosgradoNivelModule,
    PosgradoTiposEvaluacionesNotaModule,
    PosgradoAsignacionesDocentModule,
    PosgradoCalificacionModule,
    PosgradoAsignacionesHorarioModule,
    HorasClasModule,
    PosgradoClasesVideoModule,
    AuthModule,
  ],
})
export class AppModule {}