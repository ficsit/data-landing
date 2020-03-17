import { IFGSaveInterface } from '../interfaces/IFGSaveInterface';
import { float, int32 } from '../native/primitive';
import { classReference } from '../native/references';
import { FTrackGraph } from '../structs/FTrackGraph';

import { AFGBuildableRailroadSwitchControl } from './AFGBuildableRailroadSwitchControl';
import { AFGSubsystem } from './AFGSubsystem';
import { AFGTrain } from './AFGTrain';
import { AFGTrainStationIdentifier } from './AFGTrainStationIdentifier';
import { UFGRailroadVehicleSoundComponent } from './UFGRailroadVehicleSoundComponent';

export interface AFGRailroadSubsystem extends AFGSubsystem, IFGSaveInterface {
  mConnectDistance: float;

  /**
   * Default switch control to place when building switches.
   */
  mSwitchControlClass: classReference<AFGBuildableRailroadSwitchControl>;

  /**
   * This is sound component used to play sounds on trains.
   */
  mVehicleSoundComponentClass: classReference<UFGRailroadVehicleSoundComponent>;

  /**
   * A random name is picked from here when placing a stop.
   */
  mStationNames: string[];

  /**
   * All the train tracks in the world, separated by connectivity.
   */
  mTrackGraphs: Record<int32, FTrackGraph>;

  /**
   * All station identifiers in the world.
   */
  mTrainStationIdentifiers: AFGTrainStationIdentifier[];

  /**
   * All the trains in the world.
   */
  mTrains: AFGTrain[];
}
