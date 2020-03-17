import { ESelfDrivingLocomotiveError } from '../enums/ESelfDrivingLocomotiveError';
import { ETrainDockingState } from '../enums/ETrainDockingState';
import { int32, localized } from '../native/primitive';
import { Unknown } from '../native/unknown';
import { FTrainAtcData } from '../structs/FTrainAtcData';
import { FTrainConsist } from '../structs/FTrainConsist';
import { FTrainSimulationData } from '../structs/FTrainSimulationData';

import { AFGLocomotive } from './AFGLocomotive';
import { AFGRailroadTimeTable } from './AFGRailroadTimeTable';
import { AFGRailroadVehicle } from './AFGRailroadVehicle';
import { UFGRailroadVehicleSoundComponent } from './UFGRailroadVehicleSoundComponent';

export interface AFGTrain {
  /**
   * Called when the self driving is turn on or off.
   */
  mOnSelfDrivingChanged: Unknown<'FIsSelfDrivingDelegate'>;

  /**
   * Called when the docking state changes.
   */
  mOnDockingStateChanged: Unknown<'FDockingStateDelegate'>;

  /**
   * Static information about the consist, it changes when rolling stock is added/removed or a container is loaded/unloaded.
   */
  mConsistData: FTrainConsist;

  /**
   * Runtime data for the automatic train control. See struct for more info.
   */
  mAtcData: FTrainAtcData;

  /**
   * Physics simulation for the train
   */
  mSimulationData: FTrainSimulationData;

  /**
   * The name of this train.
   */
  mTrainName: localized;

  /**
   * The track this train is on.
   */
  mTrackGraphID: int32;

  /**
   * Train are a doubly linked list, use TTrainIterator to iterate over a train.
   */
  FirstVehicle: AFGRailroadVehicle;

  LastVehicle: AFGRailroadVehicle;

  /**
   * This is the master locomotives that sends its input (throttle/brake/etc) to all other locomotives in the train.
   */
  mMultipleUnitMaster: AFGLocomotive;

  /**
   * This trains time table.
   */
  TimeTable: AFGRailroadTimeTable;

  /**
   * Is this train self driving
   */
  mIsSelfDrivingEnabled: boolean;

  /**
   * Error reported by the AI.
   */
  mSelfDrivingError: ESelfDrivingLocomotiveError;

  /**
   * The status for an ongoing dock, this is not saved, it's updated from the station we're docked to on load.
   */
  mDockingState: ETrainDockingState;

  /**
   * Sound component controlling all the moving/idle sounds for the train
   */
  mSoundComponent: UFGRailroadVehicleSoundComponent;
}
