export enum ELoginState {
  LS_NotLoggedIn,
  LS_LoggingIn,
  LS_LoggedIn,
  LS_FailedToLogin,
}

export namespace ELoginState {
  export const DisplayName = {
    [ELoginState.LS_NotLoggedIn]: 'NotLoggedIn',
    [ELoginState.LS_LoggingIn]: 'LoggingIn',
    [ELoginState.LS_LoggedIn]: 'LoggedIn',
    [ELoginState.LS_FailedToLogin]: 'FailedToLogin',
  };
}