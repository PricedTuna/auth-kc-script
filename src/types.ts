// All the Resources
export type ResourcesType =
  | "Seleccionar"
  | "Datos Generales"
  | "Historia Clínica"
  | "Accesos Vasculares"
  | "Nota Médica"
  | "Prescripción"
  | "Agenda"
  | "Sesiones HD"
  | "Sesión No Otorgada"
  | "Laboratorio"
  | "Importar Análisis"
  | "Egreso"
  | "Resumen Clínico"
  | "Traslado"
  | "Administración Laboratorio"
  | "Monitor"
  | "Validar Paciente"
  | "Eliminar Laboratorio Mensual";

// All the roles
export type RolesNameType =
  | "Administrador"
  | "SystemAdministrator"
  | "Analista Administrativo"
  | "Asistente Administrativo"
  | "Ejecutivo"
  | "Enfermeria"
  | "JEFE SERVICIO IMSS"
  | "Médico";

// All the scopes
export type ScopesType =
  | "Consulta"
  | "Editar"
  | "Eliminar"
  | "Enviar"
  | "Imprimir"
  | "Nuevo";