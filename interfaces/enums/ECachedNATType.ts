export enum ECachedNATType {
  CNT_Open,
  CNT_Moderate,
  CNT_Strict,
  CNT_TBD,
}

export const ECachedNATTypeDisplayName = {
  [ECachedNATType.CNT_Open]: 'Open',
  [ECachedNATType.CNT_Moderate]: 'Moderate',
  [ECachedNATType.CNT_Strict]: 'Strict',
  [ECachedNATType.CNT_TBD]: 'TBD',
};
