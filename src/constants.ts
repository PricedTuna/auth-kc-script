import { RolesNameType, ScopesType } from "./types";

const KEYCLOAK_URL = "keycloak.peardevice.com";
const REALM_NAME = "SmacoCareConnect";
const CLIENT_ID = "46ca5007-d924-495e-922b-b6c190a703ac";

export const BASE_URL_RESOURCE_SERVER = `https://${KEYCLOAK_URL}/admin/realms/${REALM_NAME}/clients/${CLIENT_ID}/authz/resource-server`;
export const BASE_URL = `https://${KEYCLOAK_URL}/admin/realms/${REALM_NAME}/clients/${CLIENT_ID}`;

export interface FullScope { id: string; name: ScopesType }
export interface FullRole { id: string; required: boolean; name: RolesNameType }
