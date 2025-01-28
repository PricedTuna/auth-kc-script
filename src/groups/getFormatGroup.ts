import { ResourcesType, ScopesType } from "../types";


export function getFormatGroup(client: string, resource: ResourcesType, scope: ScopesType){
  const resourceFormatted = resource.replace(/\s+/g, "");
  const scopeFormatted = scope.replace(/\s+/g, "");

  console.log({client, resource, scope}) // !
  console.log({client, resourceFormatted, scopeFormatted}) // !

  return `${client}#${resourceFormatted}#${scopeFormatted}`
}