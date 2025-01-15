import { ClientAuthInfo } from "./getAuthInfo";
import {ResourcesType} from '../types'

export interface Policy {
  id: string
  name: string
}

export function getFormatedPolicies(
  clientAuthInfo: ClientAuthInfo[],
  policySearched: string
): Policy[] {
  const policyName = policySearched.replace(/\s+/g, "");

  const policiesFounded = clientAuthInfo.filter((clientAuth) => {
    const splited = clientAuth.name.split("-");

    return splited[0] == policyName && splited.length <= 3;
  });

  return policiesFounded.map((policy) => ({id: policy.id, name: policy.name}))
}
