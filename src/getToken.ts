import axios from 'axios';
import qs from 'qs';

async function getToken(): Promise<string> {
  const data = qs.stringify({
    client_id: 'admin-cli',
    client_secret: 'vr1ymLrcnms7ykxZ82TyVORda8VOv3oZ',
    grant_type: 'password',
    username: 'admin',
    password: 'PearDevice.1'
  });

  const config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://keycloak.peardevice.com/realms/master/protocol/openid-connect/token',
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
