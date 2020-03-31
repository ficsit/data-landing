export enum EPlayOnDamageEvent {
  PODE_OnTakeAnyDamage,
  PODE_OnTakePointDamage,
  PODE_OnTakeRadialDamage,
}

export namespace EPlayOnDamageEvent {
  export const DisplayName = {
    [EPlayOnDamageEvent.PODE_OnTakeAnyDamage]: 'OnTakeAnyDamage',
    [EPlayOnDamageEvent.PODE_OnTakePointDamage]: 'OnTakePointDamage',
    [EPlayOnDamageEvent.PODE_OnTakeRadialDamage]: 'OnTakeRadialDamage',
  };
}
