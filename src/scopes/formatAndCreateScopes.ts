import { ScopesType } from "../types";
import { createScope } from "./createScope";
import { formatScopes, ScopeBody } from "./formatScopes";

async function createScopes(scopes: ScopeBody[]) {
  const responses = await Promise.all(scopes.map((scope) => createScope(scope)));
  return responses.filter((response): response is { id: string; name: string } => response !== undefined);
}

export async function formatAndCreateScopes(scopes: ScopesType[]) {
  const formattedScopes = formatScopes(scopes);
  return await createScopes(formattedScopes);
}
