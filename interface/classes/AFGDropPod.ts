import { int32 } from '../native/primitive';

import { UFGInventoryComponent } from './UFGInventoryComponent';
import { UFGPowerInfoComponent } from './UFGPowerInfoComponent';

export interface AFGDropPod {
  /**
   * The amount of available inventory slots for the drop pod
   */
  mAmountOfInventorySlots: int32;

  mPowerInfo: UFGPowerInfoComponent;

  mHasPower: boolean;

  /**
   * True when this has been opened
   */
  mHasBeenOpened: boolean;

  /**
   * Contains the loot if any
   */
  mInventory: UFGInventoryComponent;
}
