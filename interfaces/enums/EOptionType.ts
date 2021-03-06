export enum EOptionType {
  OT_Checkbox,
  OT_IntegerSelection,
  OT_FloatSelection,
  OT_Slider,
}

export const EOptionTypeDisplayName = {
  [EOptionType.OT_Checkbox]: 'Checkbox',
  [EOptionType.OT_IntegerSelection]: 'IntegerSelection (NO SUPPORT YET)',
  [EOptionType.OT_FloatSelection]: 'FloatSelection (NO SUPPORT YET)',
  [EOptionType.OT_Slider]: 'Slider',
};
