export enum EGuideLineType {
  GLT_Default,
  GLT_ConveyorBelt,
}

export namespace EGuideLineType {
  export const DisplayName = {
    [EGuideLineType.GLT_Default]: 'Default',
    [EGuideLineType.GLT_ConveyorBelt]: 'Conveyor Belt',
  };
}
