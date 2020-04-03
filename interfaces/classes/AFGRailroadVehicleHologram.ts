import { float } from '../native/primitive';
import { FRailroadTrackPosition } from '../structs/FRailroadTrackPosition';

import { AFGRailroadVehicle } from './AFGRailroadVehicle';
import { AFGVehicleHologram } from './AFGVehicleHologram';

export interface AFGRailroadVehicleHologram extends AFGVehicleHologram {
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
