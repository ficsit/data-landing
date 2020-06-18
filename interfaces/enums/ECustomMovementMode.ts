export enum ECustomMovementMode {
  CMM_None,
  CMM_Ladder,
  CMM_PipeHyper,
}

export const ECustomMovementModeDisplayName = {
  [ECustomMovementMode.CMM_None]: 'None',
  [ECustomMovementMode.CMM_Ladder]: 'Ladder',
  [ECustomMovementMode.CMM_PipeHyper]: 'Hyper Pipe',
};
