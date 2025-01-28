import { GroupId } from "../../constants";
import { ResourcesType, ScopesType } from "../../types";
import { createGroupPolicy as CreateGroupPolicy } from "./createGroupPolicy";


export function formatGroupPolicy(resource: ResourcesType, scope: ScopesType, groupId: GroupId): CreateGroupPolicy {

  return {
    name: `${resource}-${scope}`,
    decisionStrategy: "UNANIMOUS",
    groups: [groupId],
    logic: "POSITIVE"
  }

}
