import { float } from '../native/primitive';
import { Unknown } from '../native/unknown';

export interface UFGVehicleCollisionBoxComponent extends Unknown<'UBoxComponent'> {
  /**
   * Multiplier for velocity change with all impacts.
   */
  mFudgeFactor: float;

  /**
   * Added Z Velocity multiplier. DOES NOT specify how much velocity. This number should be small 0.0-1.0 range
   */
  mAddedZVelocityFactor: float;

  /**
   * The maximum Z velocity that can be added on a collision.
   */
  mMaxAddedZVelocity: float;

  /**
   * The maximum velocity that can be added on a collision.
   */
  mMaxCollisionVelocity: float;

  /**
   * The minimum velocity required for any fudged Z values to take effect. This helps when player just runs against the vehicle.
   */
  mMinVelocityForAddedZ: float;
}
