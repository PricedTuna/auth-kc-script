import { FullScope } from "./constants";
import { createPermissions } from "./permission/createPermissions";
import { createPolicies } from "./policy/createPolicies";
import { PoliciesParam, policiesParams } from "./policy/params";
import { getPolicies } from "./policy/politicas";
import { formatAndCreateResources } from "./resources/formatAndCreateResources";
import { updateResource } from "./resources/updateResource";
import { createRoles } from "./roles/createRoles";
import { formatAndCreateScopes } from "./scopes/formatAndCreateScopes";
import { ResourcesType, RolesNameType, ScopesType } from "./types";

// ===========================================
const resources: ResourcesType[] = [
  "Seleccionar",
  "Datos Generales",
  "Historia Clínica",
  "Accesos Vasculares",
  "Nota Médica",
  "Prescripción",
  "Agenda",
  "Sesiones HD",
  "Sesión No Otorgada",
  "Laboratorio",
  "Importar Análisis",
  "Egreso",
  "Resumen Clínico",
  "Traslado",
  "Administración Laboratorio",
  "Monitor",
  "Validar Paciente",
  "Eliminar Laboratorio Mensual",
];

// ===========================================
const scopes: ScopesType[] = [
  "Consulta",
  "Editar",
  "Eliminar",
  "Enviar",
  "Imprimir",
  "Nuevo",
];

// ===========================================
const roles: RolesNameType[] = [
  "Administrador",
  "Analista Administrativo",
  "Asistente Administrativo",
  "JEFE SERVICIO IMSS",
  "SystemAdministrator",
  "Enfermeria",
  "Médico",
  "Ejecutivo",
];

// ===========================================

interface Props {
  roles: RolesNameType[];
  policiesParams: PoliciesParam[];
  resources: ResourcesType[];
  scopes: ScopesType[];
}

async function formatAndCreate({
  roles,
  policiesParams,
  resources,
  scopes,
}: Props) {
  // 0. create roles
  console.log("creating roles");
  const rolesCreated = await createRoles(roles);
  console.log("rolesCreated");
  console.log(JSON.stringify(rolesCreated));

  // 1. create resources
  console.log("creating resources");
  const resourcesCreated = await formatAndCreateResources(resources);
  console.log("resourcesCreated");
  console.log(JSON.stringify(resourcesCreated));

  // 2. create scopes
  console.log("creating scopes");
  const scopesCreated = await formatAndCreateScopes(scopes);
  console.log("scopesCreated");
  console.log(JSON.stringify(scopesCreated));

  // 2.1 Vinculate scopes to resources
  console.log("updating resources");
  const resourcesUpdated = await Promise.all(
    resourcesCreated.map(({ _id, name }) =>
      updateResource({ _id, name, scopes: scopesCreated })
    )
  );
  console.log("resourcesUpdated");
  console.log(JSON.stringify(resourcesUpdated));

  // 3. create policies
  console.log("creating policies");
  const policiesCreated = await createPolicies(
    getPolicies(policiesParams, rolesCreated)
  );
  console.log("policiesCreated");
  console.log(JSON.stringify(policiesCreated));

  // 4. create permissions
  console.log("creating permissions");
  const permissionsCreated = await Promise.all(
    resourcesCreated.map((resource) =>
      createPermissions(
        resource.name,
        resource._id,
        scopesCreated as FullScope[]
      )
    )
  );
  console.log("permissionsCreated");
  console.log(JSON.stringify(permissionsCreated));
}

formatAndCreate({
  policiesParams,
  resources,
  roles,
  scopes,
});
