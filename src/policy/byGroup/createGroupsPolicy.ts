import { findGroupsByName } from "../../groups/findGroupsByName";
import { createGroupPolicy } from "./createGroupPolicy";
import { formatGroupPolicy } from "./formatGroupPolicy";
import { separateGroup } from "./separateGroup";

export async function createGroupsPolicies(groupNames: string[]) {
  const groups = await findGroupsByName(groupNames);

  groups.forEach((group) => {
    const { resource, scope } = separateGroup(group.name);

    const formattedGroup = formatGroupPolicy(resource, scope, { id: group.id });
    createGroupPolicy(formattedGroup);
  });
}