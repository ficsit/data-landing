import { float, int32 } from '../native/primitive';
import { classReference } from '../native/references';
import { Unknown } from '../native/unknown';
import { FItemAmount } from '../structs/FItemAmount';

import { AFGBuildable } from './AFGBuildable';
import { AFGBuildableGenerator } from './AFGBuildableGenerator';
import { AFGBuildableHubTerminal } from './AFGBuildableHubTerminal';
import { AFGSchematicManager } from './AFGSchematicManager';
import { UFGInventoryComponent } from './UFGInventoryComponent';
import { UFGRecipe } from './UFGRecipe';

export interface AFGBuildableTradingPost {
  /**
   * Class of generators to create with the trading post
   */
  mDefaultGeneratorRecipe: classReference<UFGRecipe>;

  /**
   * References to the created generators
   */
  mGenerators: AFGBuildableGenerator[];

  /**
   * Class of storage to create with the trading post
   */
  mDefaultStorageRecipe: classReference<UFGRecipe>;

  /**
   * Class of hub terminal to create with the trading post
   */
  mDefaultHubTerminalRecipe: classReference<UFGRecipe>;

  /**
   * Class of work bench to create with the trading post
   */
  mDefaultWorkBenchRecipe: classReference<UFGRecipe>;

  /**
   * References to the created storage
   */
  mStorage: AFGBuildable;

  /**
   * References to the created Hub Terminal
   */
  mHubTerminal: AFGBuildableHubTerminal;

  /**
   * References to the created work bench
   */
  mWorkBench: AFGBuildable;

  /**
   * Arrays containing ints for what level  we should activate/show the generator
   */
  mGeneratorVisibilityLevels: int32[];

  /**
   * Size of the storage box
   */
  mStorageInventorySize: int32;

  /**
   * At what trading post level should the storage be visible
   */
  mStorageVisibilityLevel: int32;

  /**
   * Our input inventory where items are stored before put on ship
   */
  mInputInventory: UFGInventoryComponent;

  /**
   * How far above the ground the spawn-points should be adjusted
   */
  mSpawningGroundZOffset: float;

  /**
   * How much up and down we should search for the ground around all child actors that's spawning AFGPlayerStartTradingPost
   */
  mGroundSearchZDistance: float;

  /**
   * A cached schematic manager
   */
  mSchematicManager: AFGSchematicManager;

  /**
   * The inventory to store everything in.
   */
  mStorageInventory: UFGInventoryComponent;

  /**
   * The starting resources in the tradingpost storage
   */
  mDefaultResources: FItemAmount[];

  /**
   * Component used to determine generators location
   */
  mGenerator1Location: Unknown<'USceneComponent'>;

  /**
   * Component used to determine generators location
   */
  mGenerator2Location: Unknown<'USceneComponent'>;

  /**
   * Component used to determine storage location
   */
  mStorageLocation: Unknown<'USceneComponent'>;

  /**
   * Component used to determine Hub terminal location
   */
  mHubTerminalLocation: Unknown<'USceneComponent'>;

  /**
   * Component used to determine work bench terminal location
   */
  mWorkBenchLocation: Unknown<'USceneComponent'>;

  /**
   * Bool to sync playing of build and upgrade effects
   */
  mNeedPlayingBuildEffectNotification: boolean;
}
