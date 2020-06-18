/**
 * How how fast it is to mine the resource
 */
export enum EResourcePurity {
  RP_Inpure,
  RP_Normal,
  RP_Pure,
  RP_MAX,
}

export const EResourcePurityDisplayName = {
  [EResourcePurity.RP_Inpure]: 'Impure',
  [EResourcePurity.RP_Normal]: 'Normal',
  [EResourcePurity.RP_Pure]: 'Pure',
  [EResourcePurity.RP_MAX]: '<RP_MAX>',
};
