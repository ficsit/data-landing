import { float, int32 } from '../native/primitive';

export interface FReplicatedRailroadVehicleState {
  /**
   * input replication: steering
   */
  ReverserInput: int32;

  /**
   * input replication: steering
   */
  SteeringInput: float;

  /**
   * input replication: throttle
   */
  ThrottleInput: float;

  /**
   * input replication: dynamic brakes
   */
  DynamicBrakeInput: float;

  /**
   * input replication: air brakes
   */
  AirBrakeInput: float;
}
