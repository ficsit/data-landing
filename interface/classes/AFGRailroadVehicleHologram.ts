import { float } from '../native/primitive';
import { FRailroadTrackPosition } from '../structs/FRailroadTrackPosition';

import { AFGRailroadVehicle } from './AFGRailroadVehicle';

export interface AFGRailroadVehicleHologram {
  /**
   * The length of our vehicle.
   */
  mLength: float;

  /**
   * The track position for this hologram. If valid this vehicle has snapped to a track.
   */
  mTrackPosition: FRailroadTrackPosition;

  /**
   * The snapped vehicle.
   */
  mSnappedVehicle: AFGRailroadVehicle;
}
