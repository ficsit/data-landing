export enum ETrainPlatformConnectionType {
  ETPC_Out,
  ETPC_In,
  ETPC_Neutral,
}

export namespace ETrainPlatformConnectionType {
  export const DisplayName = {
    [ETrainPlatformConnectionType.ETPC_Out]: 'Output',
    [ETrainPlatformConnectionType.ETPC_In]: 'Input',
    [ETrainPlatformConnectionType.ETPC_Neutral]: 'Neutral',
  };
}
