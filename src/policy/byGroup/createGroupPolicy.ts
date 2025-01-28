import axios from "axios";
import { BASE_URL_RESOURCE_SERVER, GroupId } from "../../constants";
import getToken from "../../getToken";

export interface createGroupPolicy {
  name: string;
  logic: "POSITIVE";
  decisionStrategy: "UNANIMOUS";
  groups: GroupId[];
}

export async function createGroupPolicy(policy: createGroupPolicy) {
  const url = BASE_URL_RESOURCE_SERVER+'/policy/group';

  let bearerToken = await getToken();
  const token = `Bearer ${bearerToken}`;

  const data = policy;

  try {
    const response = await axios.post<{ id: string; name: string }>(url, data, {
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    });

    console.log("response:", response.data ? response.data : response.status);
    return response.data;
  } catch (error: any) {
    console.error(
      "Error:",
      error.response ? error.response.data : error.message
    );
  }
}
