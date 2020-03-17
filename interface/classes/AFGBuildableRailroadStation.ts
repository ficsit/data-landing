import { AFGBuildableTrainPlatform } from './AFGBuildableTrainPlatform';
import { AFGLocomotive } from './AFGLocomotive';
import { AFGTrainStationIdentifier } from './AFGTrainStationIdentifier';

export interface AFGBuildableRailroadStation {
  /**
   * Light weight representation about this station, the railroad subsystem is responsible for this.
   */
  mStationIdentifier: AFGTrainStationIdentifier;

  /**
   * When docked, this station will fill this array with every potential platform in its tail. 1 for each train segment
   */
  mDockedPlatformList: AFGBuildableTrainPlatform[];

  /**
   * Reference to the docked locomotive.
   */
  mDockingLocomotive: AFGLocomotive;
}
