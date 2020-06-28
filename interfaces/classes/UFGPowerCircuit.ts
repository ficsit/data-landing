import { float } from '../native/primitive';
import { FPowerCircuitStats } from '../structs/FPowerCircuitStats';

import { UFGCircuit } from './UFGCircuit';

export interface UFGPowerCircuit extends UFGCircuit {
  /**
   * Total amount of energy that can be produced in the circuit. Used for stats.
   */
  mPowerProductionCapacity: float;

  /**
   * Total amount of energy produced in the circuit.
   */
  mPowerProduced: float;

  /**
   * Total amount of energy consumed in the circuit.
   */
  mPowerConsumed: float;

  /**
   * The maximum power that can be demanded by all connected infos.
   */
  mMaximumPowerDemand: float;

  /**
   * true if the fuse was triggered.
   */
  mIsFuseTriggered: boolean;

  /**
   * The power consumption/production over time. Used for feedback.
   */
  mPowerStats: FPowerCircuitStats;
}
