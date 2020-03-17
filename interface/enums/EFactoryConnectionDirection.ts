export enum EFactoryConnectionDirection {
  FCD_INPUT,
  FCD_OUTPUT,
  FCD_ANY,

  /**
   * Special case for conveyor poles, may need refactor later.
   */
  FCD_SNAP_ONLY,
  FCD_MAX,
}

export namespace EFactoryConnectionDirection {
  export const DisplayName = {
    [EFactoryConnectionDirection.FCD_INPUT]: 'Input',
    [EFactoryConnectionDirection.FCD_OUTPUT]: 'Output',
    [EFactoryConnectionDirection.FCD_ANY]: 'Any',
    [EFactoryConnectionDirection.FCD_SNAP_ONLY]: 'Snap Only',
    [EFactoryConnectionDirection.FCD_MAX]: '<FCD_MAX>',
  };
}
