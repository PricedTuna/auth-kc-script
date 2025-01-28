import { CLIENT_NAME } from "./constants";
import { addMemberToGroup } from "./groups/addMemberToGroup";
import { formatGroupUsersPolicies } from "./policy/byGroup/formatGroupUsersPolicies";
import { groupUsersPoliciesParams } from "./policy/byGroup/groupUsersPoliciesParams";

interface Props {
  clientName: string
}

async function testApp({clientName}: Props) {
  console.log("dar formato usuarios a grupos")
    const groupsAndUsers = await formatGroupUsersPolicies(
      groupUsersPoliciesParams,
      clientName
    );
    console.log("groupsAndUsers");
    console.log(JSON.stringify(groupsAndUsers));
  
    console.log("agregar usuarios a grupos")
    groupsAndUsers.forEach(async (groupAndUser) => {
      console.log(JSON.stringify(groupAndUser))
      await addMemberToGroup(groupAndUser);
    });
    console.log("Usuarios agregados (groupsAndUsers)")
    console.log(JSON.stringify(groupsAndUsers))
    console.log("fin")
}


testApp({clientName: CLIENT_NAME})