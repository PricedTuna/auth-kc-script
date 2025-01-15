import { ResourcesType, RolesNameType, ScopesType } from "../types";

export interface PoliciesParam {
  rol: RolesNameType;
  permisos: Permiso[];
}

export interface Permiso {
  resource: ResourcesType;
  scopes: ScopesType[];
}

export const policiesParams: PoliciesParam[] = [
  {
    rol: "Administrador",
    permisos: [
      {
        resource: "Accesos Vasculares",
        scopes: ["Consulta", "Nuevo", "Editar"],
      },
    ],
  },
  {
    rol: "Analista Administrativo",
    permisos: [
      {
        resource: "Accesos Vasculares",
        scopes: ["Consulta", "Nuevo", "Editar"],
      },
    ],
  },
  {
    rol: "Asistente Administrativo",
    permisos: [
      {
        resource: "Accesos Vasculares",
        scopes: ["Consulta", "Nuevo", "Editar"],
      },
    ],
  },
  {
    rol: "Ejecutivo",
    permisos: [
      {
        resource: "Accesos Vasculares",
        scopes: ["Consulta"],
      },
    ],
  },
  {
    rol: "Enfermeria",
    permisos: [
      {
        resource: "Accesos Vasculares",
        scopes: ["Consulta", "Nuevo", "Editar"],
      },
    ],
  },
  {
    rol: "JEFE SERVICIO IMSS",
    permisos: [
      {
        resource: "Accesos Vasculares",
        scopes: [],
      },
    ],
  },
  {
    rol: "Médico",
    permisos: [
      {
        resource: "Accesos Vasculares",
        scopes: ["Consulta", "Nuevo", "Editar"],
      },
    ],
  },

  {
    rol: "SystemAdministrator",
    permisos: [
      {
        resource: "Accesos Vasculares",
        scopes: [
          "Consulta",
          "Editar",
          "Eliminar",
          "Enviar",
          "Imprimir",
          "Nuevo",
        ],
      },
    ],
  },
];
