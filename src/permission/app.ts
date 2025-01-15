import { FullScope } from "../constants";
import { ResourcesType } from "../types";
import { createPermissions } from "./createPermissions";

const policySearched: ResourcesType = "Seleccionar";
const resourceId = "6a0a9fed-38bb-4a73-913e-9bd3a307208b";

const scopes: FullScope[] = [
  {
    id: "7abed30e-5a54-4b64-b5f9-7e82d9fdaef6",
    name: "Consulta",
  },
  {
    id: "832805c4-be20-4bd4-81b8-0b8a828e1f4d",
    name: "Editar",
  },
  {
    id: "0f8bc89d-e730-4501-a8a5-1663ccd95064",
    name: "Eliminar",
  },
  {
    id: "252e5ba1-96df-4f82-a5ef-95d941ecc48a",
    name: "Enviar",
  },
  {
    id: "665493b9-aac0-46ad-b72b-37dc9eb0e739",
    name: "Imprimir",
  },
  {
    id: "48f89538-764e-410c-9f3d-bb0197ba3213",
    name: "Nuevo",
  },
];

createPermissions(policySearched, resourceId, scopes);
