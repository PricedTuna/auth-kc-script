import axios from "axios";
import { BASE_URL_RESOURCE_SERVER } from "../constants";
import getToken from "../getToken";

export interface UpdateResourceBody {
  name:   string;
  "_id":    string;
  scopes: Scope[];
}

export interface Scope {
  id:      string;
  name:    string;
}


export async function updateResource(body: UpdateResourceBody) {
  const url = `${BASE_URL_RESOURCE_SERVER}/resource/${body._id}`;

  let bearerToken = await getToken()
  const token = `Bearer ${bearerToken}`;

  const data: UpdateResourceBody = {...body, "_id": body._id};

  try {
    const response = await axios.put<UpdateResourceBody>(url, data, {
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