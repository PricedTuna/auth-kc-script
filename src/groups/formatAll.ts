import { ResourcesType, ScopesType } from "../types";
import { getFormatGroup } from "./getFormatGroup";

export function formatAll(
  client: string,
  resources: ResourcesType[],
  scopes: ScopesType[]
) {
  const formattedNames: string[] = [];

  resources.forEach((resource) => {
    return scopes.forEach((scope) => {
      return formattedNames.push(getFormatGroup(client, resource, scope));
    });
  });

  return formattedNames
}