import { EFreightCargoType } from '../enums/EFreightCargoType';
import { EStackSize } from '../enums/EStackSize';
import { UStaticMesh } from '../native/assets';
import { float, int32 } from '../native/primitive';
import { objectReference } from '../native/references';
import { Unknown } from '../native/unknown';

import { AFGCharacterPlayer } from './AFGCharacterPlayer';
import { AFGRailroadVehicle } from './AFGRailroadVehicle';
import { UFGInventoryComponent } from './UFGInventoryComponent';
import { UFGRailroadVehicleMovementComponent } from './UFGRailroadVehicleMovementComponent';

export interface AFGFreightWagon extends AFGRailroadVehicle {
  /**
   * The current type of inventory this freight is holding. Default is FCT_Standard.
   */
  mFreightCargoType: EFreightCargoType;

  mTransitoryCargoType: EFreightCargoType;

  mLaunchedCharacters: AFGCharacterPlayer[];

  /**
   * vehicle simulation component
   */
  mVehicleMovement: UFGRailroadVehicleMovementComponent;

  /**
   * Responsible for handling our inventory
   */
  mStorageInventory: UFGInventoryComponent;

  /**
   * Static mesh to use when freight is holding standard inventory ( factory items )
   */
  mContainerMeshStandard: objectReference<UStaticMesh>;

  /**
   * Static mesh to use when freight is holding liquid / gas inventory
   */
  mContainerMeshLiquid: objectReference<UStaticMesh>;

  /**
   * The size of the inventory for this wagon.
   */
  mInventorySize: int32;

  /**
   * Item stack size Enum to use as base for how much fluid a Liquid / Gas Item descriptor can be stored on an index in an inventory
   */
  mFluidStackSizeDefault: EStackSize;

  /**
   * The size of the inventory for this wagon.
   */
  mFluidStackSizeMultiplier: int32;

  mCargoMeshComponent: Unknown<'UStaticMeshComponent'>;

  mLaunchCharacterScalar: float;

  mCargoOverlapCollision: Unknown<'UBoxComponent'>;
}
