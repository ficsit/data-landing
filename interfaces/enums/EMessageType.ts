export enum EMessageType {
  MT_PIMARY,
  MT_TUTORIAL,
  MT_SPAM,
  MT_UNDEFINED,
}

export namespace EMessageType {
  export const DisplayName = {
    [EMessageType.MT_PIMARY]: 'Inbox',
    [EMessageType.MT_TUTORIAL]: 'Tutorial',
    [EMessageType.MT_SPAM]: 'Spam',
    [EMessageType.MT_UNDEFINED]: 'All',
  };
}
