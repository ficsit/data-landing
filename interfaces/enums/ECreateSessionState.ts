export enum ECreateSessionState {
  CSS_NotCreateingSession,
  CSS_CreatingSession,
  CSS_DestroyingOldSession,
  CSS_UpdatingPresence,
  CSS_WaitingForPresenceToUpdate,
  CSS_WaitingForLogin,
}
