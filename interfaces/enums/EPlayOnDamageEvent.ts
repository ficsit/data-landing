export enum EPlayOnDamageEvent {
  PODE_OnTakeAnyDamage,
  PODE_OnTakePointDamage,
  PODE_OnTakeRadialDamage,
}

export const EPlayOnDamageEventDisplayName = {
  [EPlayOnDamageEvent.PODE_OnTakeAnyDamage]: 'OnTakeAnyDamage',
  [EPlayOnDamageEvent.PODE_OnTakePointDamage]: 'OnTakePointDamage',
  [EPlayOnDamageEvent.PODE_OnTakeRadialDamage]: 'OnTakeRadialDamage',
};
