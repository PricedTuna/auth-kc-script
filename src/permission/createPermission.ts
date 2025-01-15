import axios from 'axios';

// Base URL de la API
import { BASE_URL_RESOURCE_SERVER } from '../constants';

// Función para obtener el token
import getToken from '../getToken';
import { Permission } from './getFormatedPermissions';

// Función para crear permisos
export async function createPermission(permission: Permission): Promise<{ id: string; name: string } | undefined> {
  const url = `${BASE_URL_RESOURCE_SERVER}/permission/scope`;

  try {
    // Obtiene el token de autorización
    const bearerToken = await getToken();
    const token = `Bearer ${bearerToken}`;

    // Realiza la petición POST
    const response = await axios.post<{ id: string; name: string }>(url, permission, {
      headers: {
        'Authorization': token,
        'Content-Type': 'application/json',
      },
    });

    // Log de respuesta y retorno del resultado
    console.log('Response:', response.data);
    return response.data;
  } catch (error: any) {
    // Manejo de errores
    console.error('Error:', error.response ? error.response.data : error.message);
  }
}
