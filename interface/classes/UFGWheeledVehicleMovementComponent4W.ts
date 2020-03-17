import { float } from '../native/primitive';

export interface UFGWheeledVehicleMovementComponent4W {
  /**
   * Use Jace's super awesome custom gearbox or not
   */
  mUseDSOLGearbox: boolean;

  /**
   * Max slope Angle Limit (in degrees) in order to use all of SlopeShiftRatio
   */
  mDSOLMaxSlopeAngleLimit: float;

  /**
   * Amount of ADDITIONAL required gear ratio in order to shift up or down, given a slope. The result is that on steep slopes, the vehicle will shift up at a higher ratio and shift down at a higher ratio.
   */
  mSlopeShiftRatio: float;

  mDownShiftLatency: float;
}
