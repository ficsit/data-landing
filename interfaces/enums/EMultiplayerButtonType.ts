export enum EMultiplayerButtonType {
  MBT_Join,
  MBT_SendInvite,
  MBT_JoinInvite,
  MBT_ManagePlayers,
}

export const EMultiplayerButtonTypeDisplayName = {
  [EMultiplayerButtonType.MBT_Join]: 'Join',
  [EMultiplayerButtonType.MBT_SendInvite]: 'SendInvite',
  [EMultiplayerButtonType.MBT_JoinInvite]: 'JoinInvite',
  [EMultiplayerButtonType.MBT_ManagePlayers]: 'ManagePlayers',
};
