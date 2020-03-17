/**
 * Enum to track the two types of cargo (Standard and Liquid)
 */
export enum EFreightCargoType {
  FCT_NONE,
  FCT_Standard,
  FCT_Liquid,
  FCT_MAX,
}

export namespace EFreightCargoType {
  export const DisplayName = {
    [EFreightCargoType.FCT_NONE]: 'None',
    [EFreightCargoType.FCT_Standard]: 'Standard',
    [EFreightCargoType.FCT_Liquid]: 'Liquid',
    [EFreightCargoType.FCT_MAX]: '<FCT_MAX>',
  };
}
