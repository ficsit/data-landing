export enum ELoginState {
  LS_NotLoggedIn,
  LS_FailedToLogin,
  LS_LoggingIn,
  LS_LoggedIn,
}

export const ELoginStateDisplayName = {
  [ELoginState.LS_NotLoggedIn]: 'NotLoggedIn',
  [ELoginState.LS_FailedToLogin]: 'FailedToLogin',
  [ELoginState.LS_LoggingIn]: 'LoggingIn',
  [ELoginState.LS_LoggedIn]: 'LoggedIn',
};
