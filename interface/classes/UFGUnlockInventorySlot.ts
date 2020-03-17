import { int32 } from '../native/primitive';

import { UFGUnlock } from './UFGUnlock';

export interface UFGUnlockInventorySlot extends UFGUnlock {
  /**
   * Number of inventory slots this unlock adds to the players inventory
   */
  mNumInventorySlotsToUnlock: int32;
}
