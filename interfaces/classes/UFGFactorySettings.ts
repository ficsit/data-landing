import { UAkAudioEvent, UMaterialInstance, UStaticMesh } from '../native/assets';
import { float, int32 } from '../native/primitive';
import { classReference } from '../native/references';
import { Unknown } from '../native/unknown';
import { FViscosityToPuddlePair } from '../structs/FViscosityToPuddlePair';

import { AFGBuildGun } from './AFGBuildGun';
import { AFGCrate } from './AFGCrate';
import { AFGResourceMiner } from './AFGResourceMiner';
import { AFGResourceScanner } from './AFGResourceScanner';
import { UFGItemDescriptor } from './UFGItemDescriptor';
import { UFGMaterialEffect_Build } from './UFGMaterialEffect_Build';
import { UFGRecipeShortcut } from './UFGRecipeShortcut';
import { UFGSettings } from './UFGSettings';

export interface UFGFactorySettings extends UFGSettings {
  /**
   * Material on hologram for valid placement. @note Do not set in code!
   */
  mDefaultValidPlacementMaterial: UMaterialInstance;

  /**
   * Material on hologram for valid placement. @note Do not set in code!
   */
  mDefaultValidPlacementMaterialSimplified: UMaterialInstance;

  /**
   * Material on hologram for invalid placement. @note Do not set in code!
   */
  mDefaultInvalidPlacementMaterial: UMaterialInstance;

  /**
   * Material on hologram for input connections. @note Do not set in code!
   */
  mDefaultInputConnectionMaterial: UMaterialInstance;

  /**
   * Material on hologram for output connections. @note Do not set in code!
   */
  mDefaultOutputConnectionMaterial: UMaterialInstance;

  /**
   * Material on hologram for directionally neutral connections. @note Do not set in code!
   */
  mDefaultNeutralConnectionMaterial: UMaterialInstance;

  /**
   * Material on hologram for power connections. @note Do not set in code!
   */
  mDefaultPowerConnectionMaterial: UMaterialInstance;

  /**
   * Mesh used to visualize input or output connections location. @note Do not set in code!
   */
  mDefaultConveyorConnectionFrameMesh: UStaticMesh;

  /**
   * Mesh used to visualize input or output connections direction. @note Do not set in code!
   */
  mDefaultConveyorConnectionArrowMesh: UStaticMesh;

  /**
   * Mesh used to visualize pipeline connections location  @note Do not set in Code!
   */
  mDefaultPipeConnectionFrameMesh: UStaticMesh;

  /**
   * Mesh used to visualize pipeline connections direction (Consumer / Producer) @note Do not set in code!
   */
  mDefaultPipeConnectionArrowMesh: UStaticMesh;

  /**
   * Mesh used to visualize power connections. @note Do not set in code!
   */
  mDefaultPowerConnectionMesh: UStaticMesh;

  /**
   * Mesh used to visualize the clearance mesh on factories @note Do not set in code!
   */
  mClearanceMesh: UStaticMesh;

  /**
   * Material on hologram for clearance. @note Do not set in code!
   */
  mClearanceMaterial: UMaterialInstance;

  /**
   * Default sound loop placed on holograms.
   */
  mHologramLoopSound: UAkAudioEvent;

  /**
   * Snapping sound for holograms, e.g. when a conveyor snaps to an output.
   */
  mHologramSnapSound: UAkAudioEvent;

  /**
   * Mesh used to visualize alignment in build mode. @note Do not set in code!
   */
  mBuildGuideMesh: UStaticMesh;

  /**
   * Material applied to build guides to visualize alignment in build mode. @note Do not set in code!
   */
  mBuildGuideMaterial: UMaterialInstance;

  /**
   * Material applied to build guides specifically for conveyor belts to visualize alignment in build mode. @note Do not set in code!
   */
  mConveyorBuildGuideMaterial: UMaterialInstance;

  /**
   * Crate spawned when we dismantle an actor or when we die. It will be filled with the refund if it doesn't fit in the players inventory.
   */
  mInventoryDropCrate: classReference<AFGCrate>;

  /**
   * The default class we use for over clocking buildings
   */
  mPowerShardClass: classReference<UFGItemDescriptor>;

  /**
   * Default sound played when constructing a building, a random from the list is played.
   */
  mConstructionSounds: UAkAudioEvent[];

  /**
   * Default sound played when dismantling a building, a random from the list is played.
   */
  mDismantleSounds: UAkAudioEvent[];

  /**
   * Effect to play when a building is built
   * [DavalliusA:Mon/01-04-2019] seems to only be used for replays? //@TODO: see if we can't store this in a way more suitable for replays... a waste to have it in a global class like this
   */
  mBuildEffect: classReference<UFGMaterialEffect_Build>;

  /**
   * Effect to play when a building is dismantled
   * [DavalliusA:Mon/01-04-2019] seems to never ba used? //@TODO: see if we can't remove this
   */
  mDismantleEffect: classReference<UFGMaterialEffect_Build>;

  /**
   * Material used when looking at buildings for dismantle
   */
  mDismantlePendingMaterial: Unknown<'UMaterialInterface'>;

  /**
   * The default buildgun class to spawn
   */
  mBuildGunClass: classReference<AFGBuildGun>;

  /**
   * The default resource scanner class to spawn
   */
  mResourceScannerClass: classReference<AFGResourceScanner>;

  /**
   * The default resource miner class to spawn
   */
  mResourceMinerClass: classReference<AFGResourceMiner>;

  /**
   * The mesh to be used as legs on factories
   */
  mLegMesh: UStaticMesh;

  /**
   * The mesh to be used as foots on factories
   */
  mFootMesh: UStaticMesh;

  /**
   * Maximum length when we want to spawn the legs
   */
  mMaxFeetLength: float;

  /**
   * The class we want to spawn for recipe shortcuts
   */
  mRecipeShortcutClass: classReference<UFGRecipeShortcut>;

  /**
   * Names if the input actions that defines the shortcuts. This maps directly to their index (so first entry here should mean that it should call ExecuteShortcut 0)
   */
  mShortcutMap: string[];

  /**
   * The number of hotbars
   */
  mNumHotbars: int32;

  /**
   * The max number of preset hotbars
   */
  mNumPresetHotbars: int32;

  /**
   * The number of starting hot bars
   */
  mNumSlotsPerHotbar: int32;

  /**
   * Default rate of converting FluidBox content into inventory stacks. Measured in Liters / Second
   */
  mFluidToInventoryStackRate: int32;

  /**
   * Default rate of converting Inventory stacks in to Fluid for FluidBox content. Measured in Liters / Second
   */
  mInventoryStackToFluidRate: int32;

  mAddedPipeProductionPressure: float;

  mViscosityToPuddlePairs: FViscosityToPuddlePair[];
}
