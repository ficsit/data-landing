import { IFGSignificanceInterface } from '../interfaces/IFGSignificanceInterface';
import { IFGUseableInterface } from '../interfaces/IFGUseableInterface';
import { AActor } from '../native/classes';
import { int32 } from '../native/primitive';
import { Unknown } from '../native/unknown';

import { UFGInventoryComponent } from './UFGInventoryComponent';
import { UFGPowerInfoComponent } from './UFGPowerInfoComponent';

export interface AFGDropPod
  extends AActor,
    IFGUseableInterface,
    Unknown<'IFGSaveInterface'>,
    IFGSignificanceInterface {
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
