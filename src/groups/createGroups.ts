import { ResourcesType, ScopesType } from "../types";
import { createGroup } from "./createGroup";
import { formatAll } from "./formatAll";

export async function createGroups(
  client: string,
  resources: ResourcesType[],
  scopes: ScopesType[]
) {
  const formattedGroupNames = formatAll(client, resources, scopes);

  await Promise.all(
    formattedGroupNames.map((format) => createGroup({ name: format }))
  );

  return formattedGroupNames
}
