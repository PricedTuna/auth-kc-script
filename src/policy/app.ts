import { FullRole } from "../constants";
import { createPolicies } from "./createPolicies";
import { PoliciesParam } from "./policiesParams";
import { formatPolicies } from "./formatPolicies";
import { searchRoles } from "../roles/searchRoles";
import { RolesNameType } from "../types";

const policiesParams: PoliciesParam[] = [
  {
    rol: "Administrador",
    permisos: [
      {
        resource: "Seleccionar",
        scopes: ["Consulta"],
      },
    ],
  },
  {
    rol: "Analista Administrativo",
    permisos: [
      {
        resource: "Seleccionar",
        scopes: ["Consulta"],
      },
    ],
  },
  {
    rol: "Asistente Administrativo",
    permisos: [
      {
        resource: "Seleccionar",
        scopes: ["Consulta"],
      },
    ],
  },
  {
    rol: "Ejecutivo",
    permisos: [
      {
        resource: "Seleccionar",
        scopes: ["Consulta"],
      },
    ],
  },
  {
    rol: "Enfermeria",
    permisos: [
      {
        resource: "Seleccionar",
        scopes: ["Consulta"],
      },
    ],
  },
  {
    rol: "JEFE SERVICIO IMSS",
    permisos: [
      {
        resource: "Seleccionar",
        scopes: ["Consulta"],
      },
    ],
  },
  {
    rol: "Médico",
    permisos: [
      {
        resource: "Seleccionar",
        scopes: ["Consulta"],
      },
    ],
  },
  {
    rol: "SystemAdministrator",
    permisos: [
      {
        resource: "Seleccionar",
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

const rolesToSearch: RolesNameType[] = [
  "Administrador",
  "Analista Administrativo",
  "Asistente Administrativo",
  "Ejecutivo",
  "Ejecutivo",
  "Enfermeria",
  "JEFE SERVICIO IMSS",
  "Médico",
  "SystemAdministrator",
];

async function getRoles(rolesToSearch: RolesNameType[]): Promise<FullRole[]> {
  const roles = await searchRoles();

  if (!roles) return [];

  const rolesFiltered = roles.filter((role) =>
    rolesToSearch.includes(role.name as RolesNameType)
  );
  return rolesFiltered.map(
    ({ id, name }) => ({ id, name, required: false } as FullRole)
  );
}

async function main(rolesToSearch: RolesNameType[], policiesParams: PoliciesParam[]) {
  const roles = await getRoles(rolesToSearch);
  const policies = formatPolicies(policiesParams, roles);
  await createPolicies(policies);
}

main(rolesToSearch, policiesParams)