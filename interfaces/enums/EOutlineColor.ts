export enum EOutlineColor {
  OC_NONE,
  OC_USABLE,
  OC_HOLOGRAM,
  OC_RED,
}

export namespace EOutlineColor {
  export const DisplayName = {
    [EOutlineColor.OC_NONE]: 'None',
    [EOutlineColor.OC_USABLE]: 'Usable',
    [EOutlineColor.OC_HOLOGRAM]: 'Hologram',
    [EOutlineColor.OC_RED]: 'Disabled',
  };
}
