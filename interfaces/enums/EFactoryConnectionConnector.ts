export enum EFactoryConnectionConnector {
  FCC_CONVEYOR,
  FCC_PIPE,
  FCC_MAX,
}

export namespace EFactoryConnectionConnector {
  export const DisplayName = {
    [EFactoryConnectionConnector.FCC_CONVEYOR]: 'Conveyor',
    [EFactoryConnectionConnector.FCC_PIPE]: 'Pipe',
    [EFactoryConnectionConnector.FCC_MAX]: '<FCC_MAX>',
  };
}
