import { EFGCrateIconType } from '../enums/EFGCrateIconType';
import { Unknown } from '../native/unknown';

import { AFGInteractActor } from './AFGInteractActor';
import { UFGInventoryComponent } from './UFGInventoryComponent';

export interface AFGCrate extends AFGInteractActor, Unknown<'IFGSaveInterface'> {
  /**
   * The inventory of this crate
   */
  mInventory: UFGInventoryComponent;

  mIconType: EFGCrateIconType;
}
