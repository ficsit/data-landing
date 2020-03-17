export enum ERepresentationType {
  RT_Default,
  RT_Beacon,
  RT_Crate,
  RT_Hub,
  RT_Ping,
  RT_Player,
  RT_RadarTower,
  RT_Resource,
  RT_SpaceElevator,
  RT_StartingPod,
  RT_Train,
  RT_TrainStation,
  RT_Vehicle,
  RT_VehicleDockingStation,
}

export namespace ERepresentationType {
  export const DisplayName = {
    [ERepresentationType.RT_Default]: 'Default',
    [ERepresentationType.RT_Beacon]: 'Beacon',
    [ERepresentationType.RT_Crate]: 'Crate',
    [ERepresentationType.RT_Hub]: 'Hub',
    [ERepresentationType.RT_Ping]: 'Ping',
    [ERepresentationType.RT_Player]: 'Player',
    [ERepresentationType.RT_RadarTower]: 'RadarTower',
    [ERepresentationType.RT_Resource]: 'Resource',
    [ERepresentationType.RT_SpaceElevator]: 'SpaceElevator',
    [ERepresentationType.RT_StartingPod]: 'StartingPod',
    [ERepresentationType.RT_Train]: 'Train',
    [ERepresentationType.RT_TrainStation]: 'TrainStation',
    [ERepresentationType.RT_Vehicle]: 'Vehicle',
    [ERepresentationType.RT_VehicleDockingStation]: 'VehicleDockingStation',
  };
}
