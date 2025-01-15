import { PoliciesParam } from "./policiesParams";
import { FullRole } from "../constants";
import { RolesNameType } from "../types";

export interface Role {
  id: string;
  required: boolean;
}

export interface Policy {
  name: string;
  roles: Role[];
  logic: "POSITIVE";
  decisionStrategy: "UNANIMOUS";
}

export let formatPolicies = (policiesParams: PoliciesParam[], roles: FullRole[]) => {
  const policies: Policy[] = [];

  policiesParams.map((policyParam) => {
    policyParam.rol;

    policyParam.permisos.map((permisosByResource) => {
      permisosByResource.resource;
      permisosByResource.scopes;

      permisosByResource.scopes.map((scope) => {
        const policyName = `${permisosByResource.resource.replace(
          /\s+/g,
          ""
        )}-${scope}`;

        const policyAdded = policies.find(
          (policy) => policy.name == policyName
        );

        if (!policyAdded) {
          policies.push({
            name: policyName,
            decisionStrategy: "UNANIMOUS",
            logic: "POSITIVE",
            roles: [getRole(policyParam.rol, roles)],
          });
        } else {
          policyAdded.roles.push(getRole(policyParam.rol, roles));
        }
      });
    });
  });

  return policies
};

const getRole = (roleName: RolesNameType, roles: FullRole[]): Role => {
  const rol = roles.find((rol) => rol.name == roleName);
  
  if(rol == undefined)
    throw new Error(`Rol not found (searching for rol: "${roleName}" in roles: ${JSON.stringify(roles)})`);

  return { id: rol.id, required: rol.required } as Role;
};
