import { int32 } from '../native/primitive';
import { classReference } from '../native/references';
import { Unknown } from '../native/unknown';
import { FInventoryStack } from '../structs/FInventoryStack';

import { UFGItemDescriptor } from './UFGItemDescriptor';

export interface UFGInventoryComponent extends Unknown<'UActorComponent'>, Unknown<'IFGSaveInterface'> {
  /**
   * Called when this inventory has been resized
   */
  ResizeInventoryDelegate: Unknown<'FInventoryResized'>;

  /**
   * Called when this inventory has something added to it, @note: Client doesn't garantuee order of Added/Remove delegate
   */
  OnItemAddedDelegate: Unknown<'FOnItemAdded'>;

  /**
   * Called when something has been removed from the inventory, @note: Client doesn't garantuee order of Added/Remove delegate
   */
  OnItemRemovedDelegate: Unknown<'FOnItemRemoved'>;

  /**
   * When we make an inventory by adding the component to an actor we use this to specify its size
   */
  mDefaultInventorySize: int32;

  /**
   * When we resize the inventory we save how much bigger or smaller the inventory was made
   */
  mAdjustedSizeDiff: int32;

  /**
   * All items in the inventory
   */
  mInventoryStacks: FInventoryStack[];

  /**
   * In some rare cases we don't want to use the StackSize to limit the slot, so this way we can have larger or smaller slots
   */
  mArbitrarySlotSizes: int32[];

  /**
   * This are the allowed inventory items, this we we can "filter" in BluePrint as well.
   */
  mAllowedItemDescriptors: classReference<UFGItemDescriptor>[];

  /**
   * Can stuff in this inventory be rearranged, that is moved from one slot to the other?
   */
  mCanBeRearrange: boolean;
}
