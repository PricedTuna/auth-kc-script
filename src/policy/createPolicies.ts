import { createPolicy } from "./createPolicy";
import { Policy } from "./formatPolicies";

export const createPolicies = async (policies: Policy[]) => {
  const reponses = await Promise.all(
    policies.map((policy) => createPolicy(policy))
  );

  return reponses.filter((response): response is { id: string; name: string } => response !== undefined);
};
