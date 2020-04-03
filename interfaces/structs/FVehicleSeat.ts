import { AFGCharacterPlayer } from '../classes/AFGCharacterPlayer';
import { AFGDriveablePawn } from '../classes/AFGDriveablePawn';
import { AFGPassengerSeat } from '../classes/AFGPassengerSeat';
import { float } from '../native/primitive';
import { classReference } from '../native/references';
import { Unknown } from '../native/unknown';

export interface FVehicleSeat {
  /**
   * Seat class to spawn.
   */
  SeatClass: classReference<AFGPassengerSeat>;

  /**
   * Socket to attach character to.
   */
  SitSocket: string;

  /**
   * Is seat and characters in this seat visible.
   */
  IsVisible: boolean;

  /**
   * Animation to play on characters in this seat.
   */
  SitAnimation: Unknown<'UAnimSequence'>;

  /**
   * How much damage do we take in this seat.
   */
  DamageMultiplier: float;

  /**
   * Pawn we possess when entering this seat.
   */
  mSeatPawn: AFGDriveablePawn;

  /**
   * Info about the character in this seat.
   */
  mCharacter: AFGCharacterPlayer;

  mController: Unknown<'AController'>;
}
