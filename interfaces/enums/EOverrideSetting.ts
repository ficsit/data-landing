export enum EOverrideSetting {
  OS_Additive,
  OS_Override,
}

export namespace EOverrideSetting {
  export const DisplayName = {
    [EOverrideSetting.OS_Additive]: 'Additive',
    [EOverrideSetting.OS_Override]: 'Override',
  };
}
