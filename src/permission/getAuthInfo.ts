import axios from "axios";
import getToken from '../getToken';
import { BASE_URL_RESOURCE_SERVER } from "../constants";

export interface ClientAuthInfo {
  id:               string;
  name:             string;
  type:             Type;
  logic:            Logic;
  decisionStrategy: DecisionStrategy;
  config:           Config;
  description?:     string;
}

export interface Config {
  roles?: string;
}

export enum DecisionStrategy {
  Affirmative = "AFFIRMATIVE",
  Unanimous = "UNANIMOUS",
}

export enum Logic {
  Positive = "POSITIVE",
}

export enum Type {
  Role = "role",
  Scope = "scope",
}


export async function getAuthInfo() {

  let bearerToken = await getToken()
  const token = `Bearer ${bearerToken}`;

  const config = {
    method: "GET",
    maxBodyLength: Infinity,
    url: BASE_URL_RESOURCE_SERVER + "/policy",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      'Authorization': token,
    },
  };

  try {
    const response = await axios.request<ClientAuthInfo[]>(config);
    if (response.data) {
      return response.data;
    } else {
      throw new Error("Response not found");
    }
  } catch (error: any) {
    console.error(
      "Error fetching data:",
      error.response?.data || error.message
    );
    throw new Error("Unable to fetch data");
  }
}
