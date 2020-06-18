export enum ECantJoinReason {
  CJR_InvalidGame,
  CJR_NotInAGame,
  CJR_PlayingOtherGame,
  CJR_PrivateGame,
  CJR_DifferentVersion,
  CJR_FullGame,
  CJR_Ok,
}

export const ECantJoinReasonDisplayName = {
  [ECantJoinReason.CJR_InvalidGame]: 'Invalid Game',
  [ECantJoinReason.CJR_NotInAGame]: 'Not in a game',
  [ECantJoinReason.CJR_PlayingOtherGame]: 'Playing Other Game',
  [ECantJoinReason.CJR_PrivateGame]: 'Private Game',
  [ECantJoinReason.CJR_DifferentVersion]: 'Different Version',
  [ECantJoinReason.CJR_FullGame]: 'Full Game',
  [ECantJoinReason.CJR_Ok]: 'Ok',
};
