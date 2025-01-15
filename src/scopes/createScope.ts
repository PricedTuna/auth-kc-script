import axios from 'axios';
import getToken from '../getToken';
import { BASE_URL_RESOURCE_SERVER } from '../constants';

export async function createScope(body: any) {
  const url = BASE_URL_RESOURCE_SERVER+'/scope';

  let bearerToken = await getToken()
  const token = `Bearer ${bearerToken}`;

  const data = body;

  try {
    const response = await axios.post<{id: string, name: string}>(url, data, {
      headers: {
        'Authorization': token,
        'Content-Type': 'application/json'
      }
    });

    console.log('Response:', response.data);
    return response.data
  } catch (error: any) {
    console.error('Error:', error.response ? error.response.data : error.message);
  }
}


