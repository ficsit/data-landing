import { float, int8 } from '../native/primitive';

import { FPowerGraphPoint } from './FPowerGraphPoint';

export interface FPowerCircuitStats {
  /**
   * The duration between each stat.
   */
  StatIntervalTime: float;

  /**
   * For how long do we keep the stats.
   */
  StatHistoryTime: float;

  /**
   * How much power can be produced.
   */
  PowerProductionCapacity: float;

  /**
   * How much power is produced.
   */
  PowerProduced: float;

  /**
   * How much power is consumed.
   */
  PowerConsumed: float;

  /**
   * All the points on the graph.
   */
  Items: FPowerGraphPoint[];

  /**
   * The index we count as the first index in our ring buffer
   */
  FirstIndex: int8;
}
