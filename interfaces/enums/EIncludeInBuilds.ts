/**
 * Where this schematic should be included. Cooker strips away builds that's marked for different build types
 */
export enum EIncludeInBuilds {
  IIB_Never,
  IIB_Development,
  IIB_PrivateBuilds,
  IIB_PublicBuilds,
}

export const EIncludeInBuildsDisplayName = {
  [EIncludeInBuilds.IIB_Never]: 'Never',
  [EIncludeInBuilds.IIB_Development]: 'Development',
  [EIncludeInBuilds.IIB_PrivateBuilds]: 'PrivateBuilds',
  [EIncludeInBuilds.IIB_PublicBuilds]: 'PublicBuilds',
};
