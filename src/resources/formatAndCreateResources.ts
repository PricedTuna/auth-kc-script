import { ResourcesType } from "../types";
import { createResource } from "./createResource";
import { formatResources, ResourceBody } from "./formatResources";

async function createResources(resources: ResourceBody[]) {
  const responses = await Promise.all(
    resources.map((resource) => {
      return createResource(resource);
    })
  );

  return responses.filter((response): response is { "_id": string; name: string } => response !== undefined);
}

export async function formatAndCreateResources(resources: ResourcesType[]) {
  const resourcesFormatted = formatResources(resources);
  return await createResources(resourcesFormatted);
}


