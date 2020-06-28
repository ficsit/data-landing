import { IFGSaveInterface } from '../interfaces/IFGSaveInterface';
import { Vector } from '../native/structs';
import { Unknown } from '../native/unknown';

import { AFGCharacterPlayer } from './AFGCharacterPlayer';

export interface AFGDriveablePawn extends Unknown<'APawn'>, IFGSaveInterface {
  /**
   * True if the driver should be attached, false if this is a "remote controlled" pawn.
   */
  mShouldAttachDriver: boolean;

  /**
   * True if the driver should be visible, set from FVehicleSeat
   */
  mIsDriverVisible: boolean;

  /**
   * Socket to attach the driver to, if mShouldAttachDriver is true, set from FVehicleSeat
   */
  mDriverSeatSocket: string;

  /**
   * Animation to play on the character player when in the driver seat, set from FVehicleSeat
   */
  mDriverSeatAnimation: Unknown<'UAnimSequence'>;

  /**
   * Where to place the driver upon exiting (local space), set from FVehicleSeat
   */
  mDriverExitOffset: Vector;

  /**
   * The driver, not saved, pawns remember their last driven vehicle and enters it in begin play.
   */
  mDriver: AFGCharacterPlayer;

  /**
   * Is this vehicle being driven.
   */
  mIsDriving: boolean;
}
