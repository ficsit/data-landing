export enum EMultipleUnitControl {
  MUC_Disabled,
  MUC_Master,
  MUC_Slave,
}

export namespace EMultipleUnitControl {
  export const DisplayName = {
    [EMultipleUnitControl.MUC_Disabled]: 'Disabled',
    [EMultipleUnitControl.MUC_Master]: 'Master',
    [EMultipleUnitControl.MUC_Slave]: 'Slave',
  };
}
