import { AddMemberToGroup } from "../../groups/addMemberToGroup";
import { getFormatGroup } from "../../groups/getFormatGroup";
import { getGroups } from "../../groups/getGroups";
import { findUserByEmail } from "../../users/findUserByEmail";
import { PoliciesByUser } from "./groupUsersPoliciesParams";

export async function formatGroupUsersPolicies(
  policiesByUser: PoliciesByUser[],
  clientName: string
) {
  const groups = await getGroups();
  if (!groups) throw new Error("No groups founded");

  const policiesFormatted: AddMemberToGroup[] = [];

  for (const { email, permisos } of policiesByUser) {
    const userFounded = await findUserByEmail(email);

    if (!userFounded) continue;

    for (const permiso of permisos) {
      for (const scope of permiso.scopes) {
        const groupName = getFormatGroup(clientName, permiso.resource, scope);
        const groupFound = groups.find((group) => group.name === groupName);

        if (!groupFound) throw new Error("Group not found: " + groupName);

        policiesFormatted.push({
          groupId: groupFound.id,
          userId: userFounded.id,
        });
      }
    }
  }
  return policiesFormatted;
}
