export enum ESessionVisibility {
  SV_Private,
  SV_FriendsOnly,
  SV_Invalid,
}

export namespace ESessionVisibility {
  export const DisplayName = {
    [ESessionVisibility.SV_Private]: 'Private',
    [ESessionVisibility.SV_FriendsOnly]: 'FriendsOnly',
    [ESessionVisibility.SV_Invalid]: '<SV_Invalid>',
  };
}
