export enum EStackSize {
  SS_ONE,
  SS_SMALL,
  SS_MEDIUM,
  SS_BIG,
  SS_HUGE,
  SS_FLUID,
  SS_LAST_ENUM,
}

export const EStackSizeDisplayName = {
  [EStackSize.SS_ONE]: 'One',
  [EStackSize.SS_SMALL]: 'Small',
  [EStackSize.SS_MEDIUM]: 'Medium',
  [EStackSize.SS_BIG]: 'Big',
  [EStackSize.SS_HUGE]: 'Huge',
  [EStackSize.SS_FLUID]: 'Fluid',
  [EStackSize.SS_LAST_ENUM]: '<SS_LAST_ENUM>',
};
