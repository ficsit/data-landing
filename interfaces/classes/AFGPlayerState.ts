import { ERepresentationType } from '../enums/ERepresentationType';
import { IFGSaveInterface } from '../interfaces/IFGSaveInterface';
import { int32, uint8 } from '../native/primitive';
import { classReference } from '../native/references';
import { Unknown } from '../native/unknown';
import { FHotbar } from '../structs/FHotbar';
import { FMessageData } from '../structs/FMessageData';
import { FPresetHotbar } from '../structs/FPresetHotbar';
import { FSlotData } from '../structs/FSlotData';

import { AFGEquipment } from './AFGEquipment';
import { UFGItemCategory } from './UFGItemCategory';
import { UFGRecipe } from './UFGRecipe';
import { UFGSchematicCategory } from './UFGSchematicCategory';
import { UFGTutorialSubsystem } from './UFGTutorialSubsystem';

export interface AFGPlayerState extends Unknown<'APlayerState'>, IFGSaveInterface {
  /**
   * Broadcast when a buildable or decor has been constructed.
   */
  BuildableConstructedDelegate: Unknown<'FOnBuildableConstructedNew'>;

  /**
   * All hotbar actions assigned
   */
  mHotbars: FHotbar[];

  /**
   * All hotbar actions assigned to presets. A preset is a saved set of shortcuts that can be assigned to the hotbar
   */
  mPresetHotbars: FPresetHotbar[];

  /**
   * The index of the current hotbar
   */
  mCurrentHotbarIndex: int32;

  /**
   * Default recipes to have shortcuts to
   */
  mDefaultRecipeShortcuts: classReference<UFGRecipe>[];

  /**
   * Recipes that are new to the player. This is only for UI feedback and doesn't affect the players ability to use the recipe
   */
  mNewRecipes: classReference<UFGRecipe>[];

  /**
   * The slot num of this player state
   */
  mSlotNum: int32;

  /**
   * This players color container
   */
  mSlotData: FSlotData;

  /**
   * Pawn we should take control of when rejoining game/loading game
   */
  mOwnedPawn: Unknown<'APawn'>;

  /**
   * Set to true after we have received our initial items
   */
  mHasReceivedInitialItems: uint8;

  /**
   * If true, then we are server admin
   */
  mIsServerAdmin: uint8;

  /**
   * Each local player has their own tutorial subsystem
   */
  mTutorialSubsystem: UFGTutorialSubsystem;

  /**
   * Class of tutorial subsystem to spawn
   */
  mTutorialSubsystemClass: classReference<UFGTutorialSubsystem>;

  /**
   * Data about all messages that can be displayed in the codex
   */
  mMessageData: FMessageData[];

  /**
   * List of equipment classes that have been equipped at least once.
   */
  mRememberedFirstTimeEquipmentClasses: classReference<AFGEquipment>[];

  /**
   * Total number of arm equipment slots for this player
   */
  mNumArmSlots: int32;

  /**
   * True if we only should show affordable recipes in manufacturing widgets
   */
  mOnlyShowAffordableRecipes: boolean;

  /**
   * The item categories that the user have collapsed in manufacturing widgets
   */
  mCollapsedItemCategories: classReference<UFGItemCategory>[];

  mFilteredOutMapTypes: ERepresentationType[];

  mFilteredOutCompassTypes: ERepresentationType[];

  /**
   * The last selected category in the resource sink shop so we can open the shop at the same category later
   */
  mLastSelectedResourceSinkShopCategory: classReference<UFGSchematicCategory>;

  /**
   * How many inventory slots the player has observed that they have. Used to show when we have new available slots in the UI
   */
  mNumObservedInventorySlots: int32;
}
