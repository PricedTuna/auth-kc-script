import axios from 'axios';

// Base URL de la API
import { BASE_URL_RESOURCE_SERVER, MINIMAL_BASE_URL } from '../constants';

// Función para obtener el token
import getToken from '../getToken';

export interface AddMemberToGroup {
  userId: string
  groupId: string
}

// Función para crear permisos
export async function addMemberToGroup({groupId, userId}: AddMemberToGroup) {
  const url = `${MINIMAL_BASE_URL}/users/${userId}/groups/${groupId}`;

  try {
    // Obtiene el token de autorización
    const bearerToken = await getToken();
    const token = `Bearer ${bearerToken}`;

    // Realiza la petición POST
    const response = await axios.put(url, {}, {
      headers: {
        'Authorization': token
      },
    });

    // Log de respuesta y retorno del resultado
    console.log('Response:', response.data);
    return response.data;
  } catch (error: any) {
    // Manejo de errores
    console.error('Error:', error.response ? error.response.data : error.message);
    console.error(JSON.stringify(error))
  }
}
