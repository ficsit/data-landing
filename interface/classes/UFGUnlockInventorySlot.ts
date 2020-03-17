import { int32 } from '../native/primitive';

export interface UFGUnlockInventorySlot {
  /**
   * Number of inventory slots this unlock adds to the players inventory
   */
  mNumInventorySlotsToUnlock: int32;
}
