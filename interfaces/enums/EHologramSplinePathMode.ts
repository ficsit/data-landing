export enum EHologramSplinePathMode {
  HSPM_AUTO,
  HSPM_STRAIGHT_HORZ,
  HSPM_STRAIGHT_VERT,
  HSPM_HORZ_TO_VERT,
  HSPM_VERT_TO_HORZ,
  HSPM_PATH_FIND,
  HSPM_AUTO_2D,
  HSPM_NOODLE,
  HSPM_MAX,
}

export namespace EHologramSplinePathMode {
  export const DisplayName = {
    [EHologramSplinePathMode.HSPM_AUTO]: 'Auto',
    [EHologramSplinePathMode.HSPM_STRAIGHT_HORZ]: 'Straight Horizontal',
    [EHologramSplinePathMode.HSPM_STRAIGHT_VERT]: 'Straight Vertical',
    [EHologramSplinePathMode.HSPM_HORZ_TO_VERT]: 'Horizontal to Vertical',
    [EHologramSplinePathMode.HSPM_VERT_TO_HORZ]: 'Vertical to Horizontal',
    [EHologramSplinePathMode.HSPM_PATH_FIND]: 'Path Find',
    [EHologramSplinePathMode.HSPM_AUTO_2D]: 'Auto 2D/Conveyor Mode',
    [EHologramSplinePathMode.HSPM_NOODLE]: 'Noodle',
    [EHologramSplinePathMode.HSPM_MAX]: '<HSPM_MAX>',
  };
}
