import { FullScope } from "../constants";
import { createPermissions } from "./createPermissions";

const policySearched = "Accesos Vasculares";
const resourceId = "c6349087-2731-46bf-807d-244e51cfc1c2";
const scopes: FullScope[] = []

createPermissions(policySearched, resourceId, scopes);