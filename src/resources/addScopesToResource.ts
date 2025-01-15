import { FullScope } from "../constants";
import { updateResource, UpdateResourceBody } from "./updateResource";

interface Props {
  scopes: FullScope[];
  clientId: string;
  clientName: string;
}

export async function addScopesToResource({
  clientId,
  clientName,
  scopes,
}: Props) {
  const updateResourceData: UpdateResourceBody = {
    _id: clientId,
    name: clientName,
    scopes,
  };

  return await updateResource(updateResourceData);
}
