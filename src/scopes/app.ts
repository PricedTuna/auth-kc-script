import { ScopesType } from "../types";
import { formatAndCreateScopes } from "./formatAndCreateScopes";

const scopes: ScopesType[] = [
  "Consulta",
  "Editar",
  "Eliminar",
  "Enviar",
  "Imprimir",
  "Nuevo",
];

formatAndCreateScopes(scopes);