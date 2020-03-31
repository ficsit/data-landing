export enum EJoinSessionState {
  JSS_NotJoiningSession,
  JSS_WaitingForLoginToComplete,
  JSS_QueryingHostsId,
  JSS_DestroyingOldSession,
  JSS_ConnectingToHost,
}
