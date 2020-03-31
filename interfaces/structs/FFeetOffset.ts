import { float, uint8 } from '../native/primitive';

export interface FFeetOffset {
  /**
   * The name of the foot's socket.
   */
  FeetIndex: uint8;

  /**
   * The offset along the Z axis from the parent mesh origo.
   */
  OffsetZ: float;

  /**
   * Does this foot have a valid offset, only used during hologram placement.
   */
  IsValidOffset: boolean;
}
