import { float } from '../native/primitive';
import { FRailroadTrackPosition } from '../structs/FRailroadTrackPosition';

import { AFGTrain } from './AFGTrain';
import { AFGVehicle } from './AFGVehicle';

export interface AFGRailroadVehicle extends AFGVehicle {
  /**
   * The train this vehicle is part of, updated from the railroad subsystem
   */
  mTrain: AFGTrain;

  /**
   * How long is this vehicle.
   */
  mLength: float;

  /**
   * If this vehicle is reversed in the train formation.
   */
  mIsOrientationReversed: boolean;

  /**
   * Where along the track is the train.
   */
  mTrackPosition: FRailroadTrackPosition;
}
