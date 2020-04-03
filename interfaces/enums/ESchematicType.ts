/**
 * @todo [MODSUPPORT] This should maybe be implemented the same way as UFGBuildCategories?
 */
export enum ESchematicType {
  EST_Custom,
  EST_Cheat,
  EST_Tutorial,
  EST_Milestone,
  EST_Alternate,
  EST_Story,
  EST_MAM,
  EST_ResourceSink,
  EST_HardDrive,
}

export namespace ESchematicType {
  export const DisplayName = {
    [ESchematicType.EST_Custom]: 'Custom',
    [ESchematicType.EST_Cheat]: 'Cheat',
    [ESchematicType.EST_Tutorial]: 'Tutorial',
    [ESchematicType.EST_Milestone]: 'Milestone',
    [ESchematicType.EST_Alternate]: 'Alternate',
    [ESchematicType.EST_Story]: 'Story',
    [ESchematicType.EST_MAM]: 'MAM',
    [ESchematicType.EST_ResourceSink]: 'Resource Sink',
    [ESchematicType.EST_HardDrive]: 'Hard Drive',
  };
}
