import { float } from '../native/primitive';
import { Unknown } from '../native/unknown';
import { FVehicleDifferential6WData } from '../structs/FVehicleDifferential6WData';
import { FVehicleEngineData6W } from '../structs/FVehicleEngineData6W';
import { FVehicleTransmissionData6W } from '../structs/FVehicleTransmissionData6W';

export interface UFGWheeledVehicleMovementComponent6W extends Unknown<'UWheeledVehicleMovementComponent'> {
  /**
   * Engine
   */
  EngineSetup: FVehicleEngineData6W;

  /**
   * Differential
   */
  DifferentialSetup: FVehicleDifferential6WData;

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

  /**
   * Transmission data
   */
  TransmissionSetup: FVehicleTransmissionData6W;

  /**
   * Multiplier for down shifting latency. Eg. it may be better to have a faster latency when downshifting
   */
  mDownShiftLatency: float;

  /**
   * Maximum steering versus forward speed (km/h)
   */
  SteeringCurve: Unknown<'FRuntimeFloatCurve'>;

  /**
   * Accuracy of Ackermann steer calculation (range: 0..1)
   */
  AckermannAccuracy: float;
}
