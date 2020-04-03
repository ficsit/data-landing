export enum EMoveSpeed {
  MS_Undefined,
  MS_Walk,
  MS_Run,
  MS_Sprint,
}

export namespace EMoveSpeed {
  export const DisplayName = {
    [EMoveSpeed.MS_Undefined]: '<MS_Undefined>',
    [EMoveSpeed.MS_Walk]: 'Slow speed',
    [EMoveSpeed.MS_Run]: 'Normal',
    [EMoveSpeed.MS_Sprint]: 'Extra fast',
  };
}
