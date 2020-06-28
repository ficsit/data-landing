export enum ENetIdType {
  NIT_EPIC,
  NIT_STEAM,
  NIT_OTHER,
}

export const ENetIdTypeDisplayName = {
  [ENetIdType.NIT_EPIC]: 'Epic',
  [ENetIdType.NIT_STEAM]: 'Steam',
  [ENetIdType.NIT_OTHER]: 'Other',
};
