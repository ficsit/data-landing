export enum ENetmodeAvailability {
  NA_ServerAndClient,
  NA_OnlyServer,
  NA_OnlyClient,
}

export const ENetmodeAvailabilityDisplayName = {
  [ENetmodeAvailability.NA_ServerAndClient]: 'Server and Client',
  [ENetmodeAvailability.NA_OnlyServer]: 'Only Server',
  [ENetmodeAvailability.NA_OnlyClient]: 'Only Client',
};
