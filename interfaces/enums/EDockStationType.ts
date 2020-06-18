export enum EDockStationType {
  DST_NONE,
  DST_TRUCK,
  DST_TRAIN,
  DST_LAST_ENUM,
}

export const EDockStationTypeDisplayName = {
  [EDockStationType.DST_NONE]: 'None',
  [EDockStationType.DST_TRUCK]: 'Truck',
  [EDockStationType.DST_TRAIN]: 'Train',
  [EDockStationType.DST_LAST_ENUM]: '<DST_LAST_ENUM>',
};
