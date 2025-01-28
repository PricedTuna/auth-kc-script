import { createGroupsPolicies } from "./createGroupsPolicy";

// const groups: Group[] = [
//   {
//     id: "adfa3bd3-ce6a-4411-8065-244a9b10d9e2",
//     name: "Clinica-LosMochis#Egreso#Consulta",
//   },
//   {
//     id: "72682c5d-9fc6-4fdc-bcb2-fa3dfa997a76",
//     name: "Clinica-LosMochis#Egreso#Editar",
//   },
// ];

const groupNames: string[] = [
  "Clinica-LosMochis#Traslado#Consulta",
  "Clinica-LosMochis#Traslado#Editar",
];

createGroupsPolicies(groupNames);
