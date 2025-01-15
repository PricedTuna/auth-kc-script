import { RolesNameType, ScopesType } from "./types";

// const KEYCLOAK_URL = "keycloak.peardevice.com";
// const REALM_NAME = "SmacoCareConnect";
// const CLIENT_ID = "46ca5007-d924-495e-922b-b6c190a703ac";

// export const ADMIN_USERNAME = "PearDevice.1";
// export const ADMIN_PASSWORD = "admin";
// export const MASTER_SECRET = "vr1ymLrcnms7ykxZ82TyVORda8VOv3oZ";

// export const BASE_URL_RESOURCE_SERVER = `https://${KEYCLOAK_URL}/admin/realms/${REALM_NAME}/clients/${CLIENT_ID}/authz/resource-server`;
// export const BASE_URL = `https://${KEYCLOAK_URL}/admin/realms/${REALM_NAME}/clients/${CLIENT_ID}`;
// export const ADMIN_BASE_URL = `https://${KEYCLOAK_URL}/realms/master/protocol/openid-connect/token`;

export const MASTER_SECRET = "VpFT9o0QkxpfC5TAn4omalO4ZI7mXgka";
export const ADMIN_USERNAME = "admin";
export const ADMIN_PASSWORD = "password";

export const KEYCLOAK_URL = "localhost:8080";
const REALM_NAME = "SmacoCareConnect";
const CLIENT_ID = "e53f2c0b-3fd0-4a63-b6cd-585028002e71";

export const BASE_URL_RESOURCE_SERVER = `http://${KEYCLOAK_URL}/admin/realms/${REALM_NAME}/clients/${CLIENT_ID}/authz/resource-server`;
export const BASE_URL = `http://${KEYCLOAK_URL}/admin/realms/${REALM_NAME}/clients/${CLIENT_ID}`;
export const ADMIN_BASE_URL = `http://${KEYCLOAK_URL}/realms/master/protocol/openid-connect/token`;

export interface FullScope {
  id: string;
  name: ScopesType;
}
export interface FullRole {
  id: string;
  required: boolean;
  name: RolesNameType;
}
