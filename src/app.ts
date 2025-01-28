import { CLIENT_NAME, FullScope } from "./constants";
import { addMemberToGroup } from "./groups/addMemberToGroup";
import { createGroups } from "./groups/createGroups";
import { createPermissions } from "./permission/createPermissions";
import { createGroupsPolicies } from "./policy/byGroup/createGroupsPolicy";
import { formatGroupUsersPolicies } from "./policy/byGroup/formatGroupUsersPolicies";
import { groupUsersPoliciesParams } from "./policy/byGroup/groupUsersPoliciesParams";
import { formatAndCreateResources } from "./resources/formatAndCreateResources";
import { updateResource } from "./resources/updateResource";
import { formatAndCreateScopes } from "./scopes/formatAndCreateScopes";
import { ResourcesType, ScopesType } from "./types";

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

interface Props {
  client_name: string;
  resources: ResourcesType[];
  scopes: ScopesType[];
}

async function formatAndCreate({
  client_name: clientName,
  resources,
  scopes,
}: Props) {
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

  // 3. create groups
  console.log("creating groups");
  const groupsCreated = await createGroups(clientName, resources, scopes);
  console.log("groupsCreated");
  console.log(JSON.stringify(groupsCreated));

  // 3. create policies
  console.log("creating policies");
  const policiesCreated = await createGroupsPolicies(groupsCreated);
  console.log("groupsCreated");
  console.log(JSON.stringify(groupsCreated));

  // 5. create permissions
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

  // ==================================================
  console.log("dar formato usuarios a grupos")
  const groupsAndUsers = await formatGroupUsersPolicies(
    groupUsersPoliciesParams,
    clientName
  );
  console.log("groupsAndUsers");
  console.log(JSON.stringify(groupsAndUsers));

  console.log("agregar usuarios a grupos")
  groupsAndUsers.forEach(async (groupAndUser) => {
    console.log(JSON.stringify(groupAndUser))
    await addMemberToGroup(groupAndUser);
  });
  console.log("Usuarios agregados (groupsAndUsers)")
  console.log(JSON.stringify(groupsAndUsers))
  console.log("fin")
}

formatAndCreate({
  client_name: CLIENT_NAME,
  resources,
  scopes,
});
