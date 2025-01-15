import axios from 'axios';
import getToken from '../getToken';
import { BASE_URL } from '../constants';

export interface RolesResponse {
  id:          string;
  name:        string;
  composite:   boolean;
  clientRole:  boolean;
  containerId: string;
}

export async function searchRoles() {
  const url = BASE_URL+'/roles';

  let bearerToken = await getToken()
  const token = `Bearer ${bearerToken}`;

  try {
    const response = await axios.get<RolesResponse[]>(url, {
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


