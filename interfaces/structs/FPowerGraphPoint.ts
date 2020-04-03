import { float } from '../native/primitive';

export interface FPowerGraphPoint {
  /**
   * Data for this point.
   */
  Consumed: float;

  Produced: float;

  ProductionCapacity: float;
}
