import { EFGCrateIconType } from '../enums/EFGCrateIconType';
import { IFGSaveInterface } from '../interfaces/IFGSaveInterface';

import { AFGInteractActor } from './AFGInteractActor';
import { UFGInventoryComponent } from './UFGInventoryComponent';

export interface AFGCrate extends AFGInteractActor, IFGSaveInterface {
  /**
   * The inventory of this crate
   */
  mInventory: UFGInventoryComponent;

  mIconType: EFGCrateIconType;
}
