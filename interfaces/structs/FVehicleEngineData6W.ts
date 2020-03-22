import { float } from '../native/primitive';
import { Unknown } from '../native/unknown';

export interface FVehicleEngineData6W {
  /**
   * Torque (Nm) at a given RPM
   */
  TorqueCurve: Unknown<'FRuntimeFloatCurve'>;

  /**
   * Maximum revolutions per minute of the engine
   */
  MaxRPM: float;

  /**
   * Moment of inertia of the engine around the axis of rotation (Kgm^2).
   */
  MOI: float;

  /**
   * Damping rate of engine when full throttle is applied (Kgm^2/s)
   */
  DampingRateFullThrottle: float;

  /**
   * Damping rate of engine in at zero throttle when the clutch is engaged (Kgm^2/s)
   */
  DampingRateZeroThrottleClutchEngaged: float;

  /**
   * Damping rate of engine in at zero throttle when the clutch is disengaged (in neutral gear) (Kgm^2/s)
   */
  DampingRateZeroThrottleClutchDisengaged: float;
}
