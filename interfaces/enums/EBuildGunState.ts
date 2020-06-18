export enum EBuildGunState {
  BGS_NONE,
  BGS_MENU,
  BGS_BUILD,
  BGS_DISMANTLE,
  BGS_MAX,
}

export const EBuildGunStateDisplayName = {
  [EBuildGunState.BGS_NONE]: 'None',
  [EBuildGunState.BGS_MENU]: 'Menu',
  [EBuildGunState.BGS_BUILD]: 'Build',
  [EBuildGunState.BGS_DISMANTLE]: 'Dismantle',
  [EBuildGunState.BGS_MAX]: '<BGS_MAX>',
};
