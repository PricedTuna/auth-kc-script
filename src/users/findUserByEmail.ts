import axios from "axios";
import { MINIMAL_BASE_URL } from "../constants";
import getToken from "../getToken";

export interface User {
  id:                         string;
  createdTimestamp:           number;
  username:                   string;
  enabled:                    boolean;
  totp:                       boolean;
  emailVerified:              boolean;
  firstName:                  string;
  lastName:                   string;
  email:                      string;
  disableableCredentialTypes: any[];
  requiredActions:            any[];
  notBefore:                  number;
  access:                     Access;
}

export interface Access {
  manageGroupMembership: boolean;
  view:                  boolean;
  mapRoles:              boolean;
  impersonate:           boolean;
  manage:                boolean;
}


export async function findUserByEmail(email: string) {

  const url = `${MINIMAL_BASE_URL}/users/?email=${email}`;

  try {
    // Obtiene el token de autorización
    const bearerToken = await getToken();
    const token = `Bearer ${bearerToken}`;

    // Realiza la petición POST
    const response = await axios.get<User[]>(url, {
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    });

    // Log de respuesta y retorno del resultado
    console.log("Response:", response.data);
    return response.data[0]; // always response only one (email is unique)
  } catch (error: any) {
    // Manejo de errores
    console.error(
      "Error:",
      error.response ? error.response.data : error.message
    );
  }

}