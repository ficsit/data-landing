/**
 * How much resources this node contains, a rich vein will deplete later
 */
export enum EResourceAmount {
  RA_Poor,
  RA_Normal,
  RA_Rich,
  RA_Infinite,
  RA_MAX,
}

export const EResourceAmountDisplayName = {
  [EResourceAmount.RA_Poor]: 'Poor',
  [EResourceAmount.RA_Normal]: 'Normal',
  [EResourceAmount.RA_Rich]: 'Rich',
  [EResourceAmount.RA_Infinite]: 'Infinite',
  [EResourceAmount.RA_MAX]: '<RA_MAX>',
};
