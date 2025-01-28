import axios from "axios";

// Base URL de la API
import { MINIMAL_BASE_URL } from "../constants";

// Función para obtener el token
import getToken from "../getToken";

export interface ApiGroup {
  id:        string;
  name:      string;
  path:      string;
  subGroups: any[];
}


// Función para crear permisos
export async function getGroups(): Promise<
  ApiGroup[] | undefined
> {
  const url = `${MINIMAL_BASE_URL}/groups`;

  try {
    // Obtiene el token de autorización
    const bearerToken = await getToken();
    const token = `Bearer ${bearerToken}`;

    // Realiza la petición POST
    const response = await axios.get<ApiGroup[]>(url, {
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    });

    // Log de respuesta y retorno del resultado
    console.log("response:", response.data ? response.data : response.status);
    return response.data;
  } catch (error: any) {
    // Manejo de errores
    console.error(
      "Error:",
      error.response ? error.response.data : error.message
    );
  }
}
