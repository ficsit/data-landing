export enum ETrainDockingState {
  TDS_None,
  TDS_ReadyToDock,
  TDS_Docked,
}

export namespace ETrainDockingState {
  export const DisplayName = {
    [ETrainDockingState.TDS_None]: 'None',
    [ETrainDockingState.TDS_ReadyToDock]: 'Ready To Dock',
    [ETrainDockingState.TDS_Docked]: 'Docked',
  };
}
