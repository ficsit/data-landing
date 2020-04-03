import { int32 } from '../native/primitive';

import { UFGUnlock } from './UFGUnlock';

export interface UFGUnlockArmEquipmentSlot extends UFGUnlock {
  /**
   * Number of arm equipment slots this unlock adds to the players inventory
   */
  mNumArmEquipmentSlotsToUnlock: int32;
}
