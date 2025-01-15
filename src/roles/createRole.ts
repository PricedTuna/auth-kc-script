import axios from 'axios';
import getToken from '../getToken';
import { BASE_URL } from '../constants';
import { RolesNameType } from '../types';

export async function createRole(name: RolesNameType) {
  const url = BASE_URL+'/roles';

  let bearerToken = await getToken()
  const token = `Bearer ${bearerToken}`;

  const data = {name};

  try {
    const response = await axios.post(url, data, {
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


