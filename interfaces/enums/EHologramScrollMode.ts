export enum EHologramScrollMode {
  HSM_NONE,
  HSM_ROTATE,
  HSM_RAISE_LOWER,
  HSM_SPLINE_PATH_MODE,
  HSM_MAX,
}

export const EHologramScrollModeDisplayName = {
  [EHologramScrollMode.HSM_NONE]: 'None',
  [EHologramScrollMode.HSM_ROTATE]: 'Rotate',
  [EHologramScrollMode.HSM_RAISE_LOWER]: 'Raise/Lower',
  [EHologramScrollMode.HSM_SPLINE_PATH_MODE]: 'Spline Mode',
  [EHologramScrollMode.HSM_MAX]: '<HSM_MAX>',
};
