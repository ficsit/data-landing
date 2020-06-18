export enum ESaveState {
  SS_Unsupported,
  SS_Volatile,
  SS_Supported,
  SS_Newer,
}

export const ESaveStateDisplayName = {
  [ESaveState.SS_Unsupported]: 'Unsupported',
  [ESaveState.SS_Volatile]: 'Volatile',
  [ESaveState.SS_Supported]: 'Supported',
  [ESaveState.SS_Newer]: 'Newer',
};
