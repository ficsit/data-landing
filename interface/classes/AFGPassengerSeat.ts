import { AFGDriveablePawn } from './AFGDriveablePawn';
import { AFGVehicle } from './AFGVehicle';

export interface AFGPassengerSeat extends AFGDriveablePawn {
  /**
   * Instance of the vehicle this passenger seat belongs to
   */
  mOuterVehicle: AFGVehicle;
}
