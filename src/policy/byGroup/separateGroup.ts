import { Group } from "../../constants";
import { ResourcesType, ScopesType } from "../../types";


export function separateGroup(groupName: string) {
  const [clinica, resource, scope] = groupName.split("#")
  return {clinica, resource: resource as ResourcesType, scope: scope as ScopesType}
}