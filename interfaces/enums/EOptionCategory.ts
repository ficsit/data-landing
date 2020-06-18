export enum EOptionCategory {
  OC_Gameplay,
  OC_Audio,
  OC_Video,
  OC_Controls,
  OC_UserInterface,
}

export const EOptionCategoryDisplayName = {
  [EOptionCategory.OC_Gameplay]: 'Gameplay',
  [EOptionCategory.OC_Audio]: 'Audio',
  [EOptionCategory.OC_Video]: 'Video',
  [EOptionCategory.OC_Controls]: 'Controls',
  [EOptionCategory.OC_UserInterface]: 'User Interface',
};
