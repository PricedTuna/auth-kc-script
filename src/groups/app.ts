import { ResourcesType, ScopesType } from "../types";
import { createGroups } from "./createGroups";

const client: string = "Clinica-LosMochis";
const resources: ResourcesType[] = ["Traslado"];
const scopes: ScopesType[] = ["Consulta", "Editar"];

createGroups(client, resources, scopes);
