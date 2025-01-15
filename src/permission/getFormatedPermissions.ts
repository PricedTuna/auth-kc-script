import { FullScope } from "../constants";
import { Policy } from "./getFormatedPolicies";

export interface Permission {
  name: string;
  description: "";
  type: "scope";
  policies: string[]; // ONLY SET ONE
  resources: string[]; // ONLY SET ONE
  scopes: string[]; // ONLY SET ONE
  logic: "POSITIVE";
  decisionStrategy: "AFFIRMATIVE";
}

export function formatPermissions(policies: Policy[], resourceId: string, scopes: FullScope[]) {
  const permissions: Permission[] = [];

  policies.forEach((policy) => {
    const [policyName, policyScopeName] = policy.name.split("-");

    const scope = scopes.find((scope) => scope.name == policyScopeName);

    permissions.push({
      name: `${policy.name}-Permiso`,
      description: "",
      type: "scope",
      policies: [policy.id], // ONLY SET ONE
      resources: [resourceId], // ONLY SET ONE
      scopes: [scope?.id ?? ""], // ONLY SET ONE
      logic: "POSITIVE",
      decisionStrategy: "AFFIRMATIVE",
    });
  });

  return permissions
}
