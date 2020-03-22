export enum EErrorResponse {
  /**
   * Shows a popup ingame or a popup in the main menu
   */
  ER_NonIntrusivePopup,

  /**
   * Sends the user to main menu and then shows a error message
   */
  ER_SendToMainMenu,

  /**
   * Sends the user to main menu and and then quit the game
   */
  ER_Quit,
}

export namespace EErrorResponse {
  export const DisplayName = {
    [EErrorResponse.ER_NonIntrusivePopup]: 'NonIntrusivePopup',
    [EErrorResponse.ER_SendToMainMenu]: 'SendToMainMenu',
    [EErrorResponse.ER_Quit]: 'Quit',
  };
}
