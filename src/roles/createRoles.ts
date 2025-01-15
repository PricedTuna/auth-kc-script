import { FullRole } from "../constants";
import { RolesNameType } from "../types";
import { createRole } from "./createRole";
import { searchRoles } from "./searchRoles";

export async function createRoles(roles: RolesNameType[]): Promise<FullRole[]> {
  await Promise.all(roles.map((role) => createRole(role)));

  const rolesFounded = await searchRoles();

  if(!rolesFounded) return []

  const filtered = rolesFounded.filter((role) => roles.includes(role.name as RolesNameType))
  return filtered.map(({id, name}) => ({id, name, required: false} as FullRole))
}
