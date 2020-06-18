export enum EMultipleUnitControl {
  MUC_Disabled,
  MUC_Master,
  MUC_Slave,
}

export const EMultipleUnitControlDisplayName = {
  [EMultipleUnitControl.MUC_Disabled]: 'Disabled',
  [EMultipleUnitControl.MUC_Master]: 'Master',
  [EMultipleUnitControl.MUC_Slave]: 'Slave',
};
