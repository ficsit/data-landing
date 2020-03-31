export enum EResourceForm {
  RF_INVALID,
  RF_SOLID,
  RF_LIQUID,
  RF_GAS,
  RF_HEAT,
  RF_LAST_ENUM,
}

export namespace EResourceForm {
  export const DisplayName = {
    [EResourceForm.RF_INVALID]: 'Invalid',
    [EResourceForm.RF_SOLID]: 'Solid',
    [EResourceForm.RF_LIQUID]: 'Liquid',
    [EResourceForm.RF_GAS]: 'Gas',
    [EResourceForm.RF_HEAT]: 'Heat',
    [EResourceForm.RF_LAST_ENUM]: '<RF_LAST_ENUM>',
  };
}
