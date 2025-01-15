
export interface ResourceBody {
  name: string,
  ownerManagedAccess: false,
  attributes: {},
  uris: [],
  icon_uri: ""
}


export function formatResources(resources: string[]): ResourceBody[] {
  return resources.map((resource) => ({
    name: resource,
    ownerManagedAccess: false,
    attributes: {},
    uris: [],
    icon_uri: ""
  }))
}