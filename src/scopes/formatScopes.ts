import { ScopesType } from "../types";

export interface ScopeBody {
  name: string,
  iconUri: "",
  displayName: ""
}

export function formatScopes(scopes: ScopesType[]): ScopeBody[] {
  return scopes.map((scope) => ({
    name: scope,
    displayName: "",
    iconUri: ""
  }))
}