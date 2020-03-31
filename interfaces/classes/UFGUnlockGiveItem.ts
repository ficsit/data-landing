import { FItemAmount } from '../structs/FItemAmount';

import { UFGUnlock } from './UFGUnlock';

export interface UFGUnlockGiveItem extends UFGUnlock {
  /**
   * The items you get from this unlock
   */
  mItemsToGive: FItemAmount[];
}
