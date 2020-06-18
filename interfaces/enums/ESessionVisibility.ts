export enum ESessionVisibility {
  SV_Private,
  SV_FriendsOnly,
  SV_Invalid,
}

export const ESessionVisibilityDisplayName = {
  [ESessionVisibility.SV_Private]: 'Private',
  [ESessionVisibility.SV_FriendsOnly]: 'FriendsOnly',
  [ESessionVisibility.SV_Invalid]: '<SV_Invalid>',
};
