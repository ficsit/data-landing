import { float } from '../native/primitive';

export interface UFGVehicleWheel {
  /**
   * Set to true if a rear wheel. This can result in custom functionality for rear wheels.
   */
  mInvertSteering: boolean;

  /**
   * Automatically generates a perfect collision cylinder that matches the wheel's dimensions.
   */
  mAutoGenerateCollisionCylinder: boolean;

  /**
   * Wheel camber angle IN DEGREES
   */
  mCamberAtRest: float;

  /**
   * Wheel camber angle IN DEGREES
   */
  mCamberAtMaxCompression: float;

  /**
   * Wheel camber angle IN DEGREES
   */
  mCamberAtMaxDroop: float;

  /**
   * camber stiffness. measured in radians per kg... or something.
   */
  mCamberStiffness: float;
}
