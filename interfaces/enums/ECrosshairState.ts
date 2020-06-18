export enum ECrosshairState {
  ECS_Default,
  ECS_GeneralUse,
  ECS_PickUp,
  ECS_Vehicle,
  ECS_Weapon,
  ECS_Workbench,
  ECS_Dismantle,
  ECS_Build,
  ECS_Custom,
}

export const ECrosshairStateDisplayName = {
  [ECrosshairState.ECS_Default]: 'Default',
  [ECrosshairState.ECS_GeneralUse]: 'General',
  [ECrosshairState.ECS_PickUp]: 'Pickup',
  [ECrosshairState.ECS_Vehicle]: 'Vehicle',
  [ECrosshairState.ECS_Weapon]: 'Weapon',
  [ECrosshairState.ECS_Workbench]: 'Workbench',
  [ECrosshairState.ECS_Dismantle]: 'Dismantle',
  [ECrosshairState.ECS_Build]: 'Build',
  [ECrosshairState.ECS_Custom]: 'Cutom',
};
