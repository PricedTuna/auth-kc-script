import axios from 'axios';

// Base URL de la API
import { MINIMAL_BASE_URL } from '../constants';

// Función para obtener el token
import getToken from '../getToken';

interface GroupBody {
  name: string
}

// Función para crear permisos
export async function createGroup(group: GroupBody): Promise<{ id: string; name: string } | undefined> {
  const url = `${MINIMAL_BASE_URL}/groups`;

  try {
    // Obtiene el token de autorización
    const bearerToken = await getToken();
    const token = `Bearer ${bearerToken}`;

    // Realiza la petición POST
    const response = await axios.post<{ id: string; name: string }>(url, group, {
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
