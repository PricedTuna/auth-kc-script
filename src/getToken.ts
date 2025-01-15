import axios from 'axios';
import qs from 'qs';
import {ADMIN_BASE_URL, ADMIN_PASSWORD, ADMIN_USERNAME, KEYCLOAK_URL, MASTER_SECRET} from './constants'

async function getToken(): Promise<string> {
  const data = qs.stringify({
    client_id: 'admin-cli',
    client_secret: MASTER_SECRET,
    grant_type: 'password',
    username: ADMIN_USERNAME,
    password: ADMIN_PASSWORD
  });

  const config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: ADMIN_BASE_URL,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: data
  };

  try {
    const response = await axios.request(config);
    if (response.data && response.data.access_token) {
      return response.data.access_token;
    } else {
      throw new Error('Token not found in response');
    }
  } catch (error: any) {
    console.error('Error fetching token:', error.response?.data || error.message);
    throw new Error('Unable to fetch token');
  }
}

export default getToken;
