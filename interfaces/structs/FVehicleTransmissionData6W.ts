import { float } from '../native/primitive';

import { FVehicleGearData6W } from './FVehicleGearData6W';

export interface FVehicleTransmissionData6W {
  /**
   * Whether to use automatic transmission
   */
  bUseGearAutoBox: boolean;

  /**
   * Time it takes to switch gears (seconds)
   */
  GearSwitchTime: float;

  /**
   * Minimum time it takes the automatic transmission to initiate a gear change (seconds)
   */
  GearAutoBoxLatency: float;

  /**
   * The final gear ratio multiplies the transmission gear ratios.
   */
  FinalRatio: float;

  /**
   * Forward gear ratios (up to 30)
   */
  ForwardGears: FVehicleGearData6W[];

  /**
   * Reverse gear ratio
   */
  ReverseGearRatio: float;

  /**
   * Value of engineRevs/maxEngineRevs that is high enough to increment gear
   */
  NeutralGearUpRatio: float;

  /**
   * Strength of clutch (Kgm^2/s)
   */
  ClutchStrength: float;
}
