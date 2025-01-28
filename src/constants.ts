import { RolesNameType, ScopesType } from "./types";

// const KEYCLOAK_URL = "keycloak.peardevice.com";
// const REALM_NAME = "SmacoCareConnect";
// const CLIENT_ID = "46ca5007-d924-495e-922b-b6c190a703ac";

// export const ADMIN_USERNAME = "PearDevice.1";
// export const ADMIN_PASSWORD = "admin";
// export const MASTER_SECRET = "vr1ymLrcnms7ykxZ82TyVORda8VOv3oZ";

export const MASTER_SECRET = "VpFT9o0QkxpfC5TAn4omalO4ZI7mXgka";
export const ADMIN_USERNAME = "admin";
export const ADMIN_PASSWORD = "password";

export const KEYCLOAK_URL = "localhost:8080";
const REALM_NAME = "scc-groups";
const CLIENT_ID = "1b4100ff-13f8-4617-b780-d6c975310515";

export const CLIENT_NAME = "Clinica-LosMochis"

export const BASE_URL_RESOURCE_SERVER = `http://${KEYCLOAK_URL}/admin/realms/${REALM_NAME}/clients/${CLIENT_ID}/authz/resource-server`;
export const BASE_URL = `http://${KEYCLOAK_URL}/admin/realms/${REALM_NAME}/clients/${CLIENT_ID}`;
export const MINIMAL_BASE_URL = `http://${KEYCLOAK_URL}/admin/realms/${REALM_NAME}`;
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

export interface Group {
  id: string;
  name: string;
}

export interface GroupId extends Pick<Group, 'id'> {}
