import { float, int32 } from '../native/primitive';
import { Unknown } from '../native/unknown';
import { FRailroadVehicleInputRate } from '../structs/FRailroadVehicleInputRate';
import { FReplicatedRailroadVehicleState } from '../structs/FReplicatedRailroadVehicleState';

import { UFGRailroadVehicleMovementComponent } from './UFGRailroadVehicleMovementComponent';

export interface UFGLocomotiveMovementComponent extends UFGRailroadVehicleMovementComponent {
  /**
   * replicated state of vehicle
   */
  mReplicatedState: FReplicatedRailroadVehicleState;

  /**
   * What the player has the reverser set to. Values -1, 0, 1
   */
  mRawReverserInput: int32;

  /**
   * What the player has the steering set to. Range -1...1
   */
  mRawSteeringInput: float;

  /**
   * What the player has the accelerator set to. Range -1...1
   */
  mRawThrottleInput: float;

  /**
   * What the dynamic brake input is set to.
   */
  mRawDynamicBrakeInput: float;

  /**
   * What the air brake input is set to.
   */
  mRawAirBrakeInput: float;

  /**
   * Rate at which input throttle can rise and fall.
   */
  mThrottleInputRate: FRailroadVehicleInputRate;

  /**
   * Rate at which input dynamic brake can rise and fall.
   */
  mDynamicBrakeInputRate: FRailroadVehicleInputRate;

  /**
   * Velocity at which the dynamic brake can be engaged.
   */
  mDynamicBrakeVelocityThreshold: float;

  /**
   * Rate at which input air brake can rise and fall.
   */
  mAirBrakeInputRate: FRailroadVehicleInputRate;

  /**
   * Reversing control output to physics system. -1, 0, 1
   */
  mReverserInput: int32;

  /**
   * Steering output to physics system. Range -1...1
   */
  mSteeringInput: float;

  /**
   * Accelerator output to physics system. Range 0...1
   */
  mThrottleInput: float;

  /**
   * Air brake output to physics system. Range 0...1
   */
  mAirBrakeInput: float;

  /**
   * Dynamic brake output to physics system. Range 0...1
   */
  mDynamicBrakeInput: float;

  /**
   * The maximum tractive force [kN] [kg m/s^2
   *  1000] that can be delivered at a given speed [km/h].
   */
  mTractiveEffortCurve: Unknown<'FRuntimeFloatCurve'>;

  /**
   * The maximum dynamic braking force [kN] [kg m/s^2
   *  1000] that can be delivered at a given speed [km/h].
   */
  mDynamicBrakingEffortCurve: Unknown<'FRuntimeFloatCurve'>;
}
