import { float } from '../native/primitive';

export interface FRailroadVehicleInputRate {
  /**
   * Rate at which the input value rises
   */
  RiseRate: float;

  /**
   * Rate at which the input value falls
   */
  FallRate: float;
}
