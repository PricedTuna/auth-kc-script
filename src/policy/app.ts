import { FullRole } from "../constants";
import { createPolicies } from "./createPolicies";
import { PoliciesParam } from "./params";
import { getPolicies } from "./politicas";

const policiesParams: PoliciesParam[] = []
const roles: FullRole[]  = []

const policies = getPolicies(policiesParams, roles);
createPolicies(policies);