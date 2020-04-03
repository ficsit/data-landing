export enum ECustomMovementMode {
  CMM_None,
  CMM_Ladder,
  CMM_PipeHyper,
}

export namespace ECustomMovementMode {
  export const DisplayName = {
    [ECustomMovementMode.CMM_None]: 'None',
    [ECustomMovementMode.CMM_Ladder]: 'Ladder',
    [ECustomMovementMode.CMM_PipeHyper]: 'Hyper Pipe',
  };
}
