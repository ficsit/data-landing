export enum ETrainPlatformDockingStatus {
  ETPDS_None,
  ETPDS_WaitingToStart,
  ETPDS_Loading,
  ETPDS_Unloading,
  ETPDS_WaitingForTransfer,
  ETPDS_Complete,
}

export const ETrainPlatformDockingStatusDisplayName = {
  [ETrainPlatformDockingStatus.ETPDS_None]: 'None',
  [ETrainPlatformDockingStatus.ETPDS_WaitingToStart]: 'WaitingToStart',
  [ETrainPlatformDockingStatus.ETPDS_Loading]: 'Loading',
  [ETrainPlatformDockingStatus.ETPDS_Unloading]: 'Unloading',
  [ETrainPlatformDockingStatus.ETPDS_WaitingForTransfer]: 'WaitingTransfer',
  [ETrainPlatformDockingStatus.ETPDS_Complete]: 'Complete',
};
