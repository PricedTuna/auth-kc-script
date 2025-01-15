import { RolesNameType, ScopesType } from "./types";

const KEYCLOAK_URL = "keycloak.peardevice.com";
const REALM_NAME = "SmacoCareConnect";
const CLIENT_ID = "f2d441fe-8822-4a40-9f67-199ca94b69a3";

export const BASE_URL_RESOURCE_SERVER = `https://${KEYCLOAK_URL}/admin/realms/${REALM_NAME}/clients/${CLIENT_ID}/authz/resource-server`;
export const BASE_URL = `https://${KEYCLOAK_URL}/admin/realms/${REALM_NAME}/clients/${CLIENT_ID}`;

export interface FullScope { id: string; name: ScopesType }
export interface FullRole { id: string; required: boolean; name: RolesNameType }
