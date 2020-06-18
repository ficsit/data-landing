export enum ETrainPlatformConnectionType {
  ETPC_Out,
  ETPC_In,
  ETPC_Neutral,
}

export const ETrainPlatformConnectionTypeDisplayName = {
  [ETrainPlatformConnectionType.ETPC_Out]: 'Output',
  [ETrainPlatformConnectionType.ETPC_In]: 'Input',
  [ETrainPlatformConnectionType.ETPC_Neutral]: 'Neutral',
};
