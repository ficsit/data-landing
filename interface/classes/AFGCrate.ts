import { EFGCrateIconType } from '../enums/EFGCrateIconType';

import { UFGInventoryComponent } from './UFGInventoryComponent';

export interface AFGCrate {
  /**
   * The inventory of this crate
   */
  mInventory: UFGInventoryComponent;

  mIconType: EFGCrateIconType;
}
