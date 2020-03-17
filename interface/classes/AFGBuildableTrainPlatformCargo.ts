import { EFreightCargoType } from '../enums/EFreightCargoType';
import { float, int8, uint8 } from '../native/primitive';
import { Unknown } from '../native/unknown';

import { UFGFactoryConnectionComponent } from './UFGFactoryConnectionComponent';
import { UFGInventoryComponent } from './UFGInventoryComponent';
import { UFGPipeConnectionComponent } from './UFGPipeConnectionComponent';

export interface AFGBuildableTrainPlatformCargo {
  /**
   * The freight cargo type this platform can interface with ( conveyor vs. pipes )
   */
  mFreightCargoType: EFreightCargoType;

  /**
   * SizeX of storage inventory
   */
  mStorageSizeX: int8;

  /**
   * SizeY of storage inventory
   */
  mStorageSizeY: int8;

  /**
   * Magic box skeletal mesh component. Plays load / unload animations during partial load / unload sequences
   */
  mMagicBoxSkelMeshComponent: Unknown<'USkeletalMeshComponent'>;

  /**
   * Cargo container mesh component. Shown / Hidden during full load and unload sequences
   */
  mCargoMeshComponent: Unknown<'UStaticMeshComponent'>;

  /**
   * Set during a dock sequence, indicating if any items can be moved from the train to the platform
   */
  mCanUnloadAny: uint8;

  /**
   * Indicates that the unloading sequence will be removing the entire contents of the freight car (there is enough room in its inventory to fit the freight cars contents)
   */
  mIsFullUnload: uint8;

  /**
   * Set during a load sequence, indicating if any items can be moved from the platform to the train
   */
  mCanLoadAny: uint8;

  /**
   * Indicates that the loading sequence will load an entire new container onto the freight car (its inventory is empty)
   */
  mIsFullLoad: uint8;

  /**
   * Time in seconds to complete a unload
   */
  mTimeToCompleteLoad: float;

  /**
   * Time in seconds to show the cargo container and hide platform container (for full loads)
   */
  mTimeToSwapLoadVisibility: float;

  /**
   * Time in seconds to complete a load
   */
  mTimeToCompleteUnload: float;

  /**
   * Time in seconds to show freight container and hide platform container (for full unloads)
   */
  mTimeToSwapUnloadVisibility: float;

  /**
   * All factory connections that can pull to our storage
   */
  mStorageInputConnections: UFGFactoryConnectionComponent[];

  /**
   * All pipe connections that can pull to our storage
   */
  mPipeInputConnections: UFGPipeConnectionComponent[];

  /**
   * All pipe connections that can push to pipelines from our storage
   */
  mPipeOutputConnections: UFGPipeConnectionComponent[];

  /**
   * Inventory where we transfer items to when unloading from a vehicle. Never reference this pointer directly. Use mCargoInventoryHandler->GetActiveInventory().
   */
  mInventory: UFGInventoryComponent;

  /**
   * If an actor is docked to this station. Used to detect actor becomes invalid due to e.g. dismantle.
   */
  mHasDockedActor: uint8;

  /**
   * Have the player specified that this station should either load or unload to vehicles?
   */
  mIsInLoadMode: uint8;

  /**
   * Are we currently in the process of loading or unloading inventory  @todoTrainPlatforms - Migrate this out and replace instances with checks against the status enum
   */
  mIsLoadUnloading: uint8;

  /**
   * Set when Docking sequence completes to inform Factory_TickProducing it should perform a load / unload
   */
  mShouldExecuteLoadOrUnload: uint8;

  /**
   * Set during a docking sequence update to toggle the visibility of the platform and freight cargo meshes
   */
  mSwapCargoVisibilityTimerHandle: Unknown<'FTimerHandle'>;

  /**
   * Replicated smoothed outflow rate
   */
  mReplicatedOutflowRate: float;

  /**
   * Replicated smoothed inflow rate
   */
  mReplicatedInflowRate: float;
}
