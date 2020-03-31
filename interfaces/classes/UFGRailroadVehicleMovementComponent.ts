import { float } from '../native/primitive';
import { Unknown } from '../native/unknown';
import { FCouplerSetup } from '../structs/FCouplerSetup';
import { FWheelsetSetup } from '../structs/FWheelsetSetup';

export interface UFGRailroadVehicleMovementComponent extends Unknown<'UPawnMovementComponent'> {
  /**
   * Wheelsets for this train. Front is 0 and back is 1.
   */
  mWheelsetSetups: FWheelsetSetup[];

  /**
   * The radius of the wheels. [cm]
   */
  mWheelRadius: float;

  /**
   * Couplers for this train. Front is 0 and back is 1.
   */
  mCouplerSetups: FCouplerSetup[];

  mMass: float;

  mMaxVelocity: float;

  mPayloadMass: float;

  /**
   * DragCoefficient of the vehicle chassis. Good values [0.4, 0.8].
   */
  mDragCoefficient: float;

  /**
   * Chassis width used for drag force computation. [cm]
   */
  mChassisWidth: float;

  /**
   * Chassis height used for drag force computation. [cm]
   */
  mChassisHeight: float;

  /**
   * The rolling resistance coefficient for rolling the wheels along the track. Good values [0.0010, 0.0024].
   */
  mRollingResistanceCoefficient: float;

  /**
   * The rolling resistance coefficient for rolling the wheels along a curved track. Good values [0.0001, 0.0004].
   */
  mCurvatureResistanceCoefficient: float;

  /**
   * The maximum air braking force that can be delivered. [kN] [kg m/s^2
   *  1000]
   */
  mMaxAirBrakingEffort: float;
}
