import { float } from '../native/primitive';
import { Unknown } from '../native/unknown';

export interface UFGCameraModifierLimitLook extends Unknown<'UCameraModifier'> {
  /**
   * The max rotation in pitch ( abs value )
   */
  mMaxPitch: float;

  /**
   * The max rotation in yaw ( abs value )
   */
  mMaxYaw: float;
}
