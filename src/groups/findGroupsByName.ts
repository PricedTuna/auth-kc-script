import { Group } from "../constants";
import { getGroups } from "./getGroups";

export async function findGroupsByName(groupNames: string[]) {
  const groupsFinal: Group[] = [];

  const groups = await getGroups();
  if (!groups) return [];

  groupNames.forEach((groupName) => {
    const groupFounded = groups.find((group) => group.name === groupName);
    groupFounded
      ? groupsFinal.push({ id: groupFounded.id, name: groupFounded.name })
      : null;
  });

  return groupsFinal;
}