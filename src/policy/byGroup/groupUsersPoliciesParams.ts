import { ResourcesType, ScopesType } from "../../types";

export interface PoliciesByUser {
  email: string;
  permisos: Permiso[];
}

export interface Permiso {
  resource: ResourcesType;
  scopes: ScopesType[];
}

export const groupUsersPoliciesParams: PoliciesByUser[] = [
  {
    email: "administrador@administrador.com",
    permisos: [
      {
        resource: "Accesos Vasculares",
        scopes: ["Consulta", "Nuevo", "Editar"],
      },
    ],
  },

  {
    email: "systemAdministrator@systemAdministrator.com",
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
]