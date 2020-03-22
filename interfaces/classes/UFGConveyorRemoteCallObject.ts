import { UFGRemoteCallObject } from './UFGRemoteCallObject';

export interface UFGConveyorRemoteCallObject extends UFGRemoteCallObject {
  /**
   * Compact representation of mSplineComponent, used for replication and save game
   */
  mForceNetField_UFGConveyorRemoteCallObject: boolean;
}
