import { float } from '../native/primitive';

export interface FVehicleGearData6W {
  /**
   * Determines the amount of torque multiplication
   */
  Ratio: float;

  /**
   * Value of engineRevs/maxEngineRevs that is low enough to gear down
   */
  DownRatio: float;

  /**
   * Value of engineRevs/maxEngineRevs that is high enough to gear up
   */
  UpRatio: float;
}
