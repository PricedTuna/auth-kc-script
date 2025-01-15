import { createPolicy } from "./createPolicy";
import { Policy } from "./politicas";

export const createPolicies = async (policies: Policy[]) => {
  console.log("va a crear policies")
  const reponses = await Promise.all(
    policies.map((policy) => createPolicy(policy))
  );

  return reponses.filter((response): response is { id: string; name: string } => response !== undefined);
};
