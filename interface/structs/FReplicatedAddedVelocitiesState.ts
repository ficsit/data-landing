import { float } from '../native/primitive';

export interface FReplicatedAddedVelocitiesState {
  /**
   * input replication: steering
   */
  IsDrifting: boolean;

  /**
   * input replication: angular velocity pitch
   */
  AddedAngularVelocityInputPitch: float;

  /**
   * input replication: angular velocity yaw
   */
  AddedAngularVelocityInputYaw: float;
}
