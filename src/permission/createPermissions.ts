import { FullScope } from "../constants";
import { createPermission } from "./createPermission";
import { getAuthInfo } from "./getAuthInfo";
import { formatPermissions } from "./getFormatedPermissions";
import { getFormatedPolicies } from "./getFormatedPolicies";

const getPermissions = async (policySearched: string, resourceId: string, scopes: FullScope[]) => {
  const clientAuthInfo = await getAuthInfo();
  const policies = getFormatedPolicies(clientAuthInfo, policySearched);
  const permissions = formatPermissions(policies, resourceId, scopes);
  return permissions;
};

export const createPermissions = async (
  policySearched: string,
  resourceId: string,
  scopes: FullScope[]
) => {
  const permissions = await getPermissions(policySearched, resourceId, scopes);

  const responses = await Promise.all(
    permissions.map((permission) => createPermission(permission))
  );
  
  return responses.filter(
    (response): response is { id: string; name: string } =>
      response !== undefined
  );
};
