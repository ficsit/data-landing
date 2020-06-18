export enum ERailroadSignalAspect {
  RSA_None,
  RSA_Clear,
  RSA_ClearThenStop,
  RSA_Stop,
  RSA_Dock,
}

export const ERailroadSignalAspectDisplayName = {
  [ERailroadSignalAspect.RSA_None]: 'None',
  [ERailroadSignalAspect.RSA_Clear]: 'Clear',
  [ERailroadSignalAspect.RSA_ClearThenStop]: 'Clear Then Stop',
  [ERailroadSignalAspect.RSA_Stop]: 'Stop',
  [ERailroadSignalAspect.RSA_Dock]: 'Dock',
};
