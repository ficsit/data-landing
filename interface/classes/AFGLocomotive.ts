import { Unknown } from '../native/unknown';

import { AFGRailroadVehicle } from './AFGRailroadVehicle';
import { UFGLocomotiveMovementComponent } from './UFGLocomotiveMovementComponent';
import { UFGPowerConnectionComponent } from './UFGPowerConnectionComponent';
import { UFGPowerInfoComponent } from './UFGPowerInfoComponent';

export interface AFGLocomotive extends AFGRailroadVehicle {
  /**
   * The power consumption of this electric locomotive, min is idle power consumption and max is power consumption at maximum torque.
   */
  mPowerConsumption: Unknown<'FFloatInterval'>;

  /**
   * The sliding shoe making contact with the third rail.
   */
  mSlidingShoe: UFGPowerConnectionComponent;

  /**
   * The power info for this train, draw power from the circuit.
   */
  mPowerInfo: UFGPowerInfoComponent;

  /**
   * @todo Replace when proper physics simulations are done.
   */
  mReplicatedMovementTransform: Unknown<'FTransform'>;

  /**
   * vehicle simulation component
   */
  mVehicleMovement: UFGLocomotiveMovementComponent;
}
