import { AActor } from '../native/classes';
import { float, int8, uint8 } from '../native/primitive';

import { UFGInventoryComponent } from './UFGInventoryComponent';
import { UFGReplicationDetailInventoryComponent } from './UFGReplicationDetailInventoryComponent';

export interface AFGBuildableDockingStation {
  /**
   * SizeX of storage inventory
   */
  mStorageSizeX: int8;

  /**
   * SizeY of storage inventory
   */
  mStorageSizeY: int8;

  /**
   * How long time it takes to transfer one stack of item from/to docking station ( in seconds )
   */
  mTransferSpeed: float;

  /**
   * How long time it takes to transfer 1 stack of fuel from/to docking station ( in seconds )
   */
  mFuelTransferSpeed: float;

  /**
   * Current progress on transfer from/to docking station ( in seconds )
   */
  mTransferProgress: float;

  mFuelInventoryHandler: UFGReplicationDetailInventoryComponent;

  mInventoryHandler: UFGReplicationDetailInventoryComponent;

  /**
   * The actor docked to this station.
   */
  mDockedActor: AActor;

  /**
   * If an actor is docked to this station. Used to detect actor becomes invalid due to e.g. dismantle.
   */
  mHasDockedActor: uint8;

  /**
   * Have the player specified that this station should either load or unload to vehicles?
   */
  mIsInLoadMode: boolean;

  /**
   * How much of a stack to transfer in each separate transfer moment
   */
  mStackTransferSize: float;

  /**
   * Are we currently in the process of loading or unloading inventory
   */
  mIsLoadUnloading: boolean;

  /**
   * Inventory where we transfer items to when unloading from a vehicle
   */
  mInventory: UFGInventoryComponent;

  /**
   * Inventory for refueling the trucks.
   */
  mFuelInventory: UFGInventoryComponent;
}
