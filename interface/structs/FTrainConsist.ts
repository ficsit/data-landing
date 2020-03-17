import { AFGRailroadVehicle } from '../classes/AFGRailroadVehicle';
import { float } from '../native/primitive';
import { classReference } from '../native/references';

export interface FTrainConsist {
  /**
   * The vehicles in this consist.
   */
  Vehicles: classReference<AFGRailroadVehicle>[];

  /**
   * Length of the consist, [cm]
   */
  Length: float;

  /**
   * Mass of the consist, [kg]
   */
  Mass: float;

  /**
   * Maximum speed for the slowest vehicle in the consist. [cm/s]
   */
  MaxSpeed: float;
}
