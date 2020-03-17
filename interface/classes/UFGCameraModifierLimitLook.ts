import { float } from '../native/primitive';

export interface UFGCameraModifierLimitLook {
  /**
   * The max rotation in pitch ( abs value )
   */
  mMaxPitch: float;

  /**
   * The max rotation in yaw ( abs value )
   */
  mMaxYaw: float;
}
