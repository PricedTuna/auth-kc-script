import { FullRole } from "../constants";
import { createPolicies } from "./createPolicies";
import { PoliciesParam } from "./policiesParams";
import { getPolicies } from "./getPolicies";

const policiesParams: PoliciesParam[] = []
const roles: FullRole[]  = []

const policies = getPolicies(policiesParams, roles);
createPolicies(policies);