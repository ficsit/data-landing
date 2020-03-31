import { AFGRailroadVehicle } from '../classes/AFGRailroadVehicle';
import { UFGLocomotiveMovementComponent } from '../classes/UFGLocomotiveMovementComponent';
import { UFGRailroadVehicleMovementComponent } from '../classes/UFGRailroadVehicleMovementComponent';
import { float } from '../native/primitive';

export interface FTrainSimulationData {
  /**
   * Cached vehicles in the direction of travel.
   */
  SimulatedVehicles: AFGRailroadVehicle[];

  /**
   * Cached movements in the same order as the vehicles.
   */
  SimulatedMovements: UFGRailroadVehicleMovementComponent[];

  /**
   * Cached master locomotive.
   */
  MasterMovement: UFGLocomotiveMovementComponent;

  /**
   * Velocity of this train [directional] [cm/s]
   */
  Velocity: float;
}
