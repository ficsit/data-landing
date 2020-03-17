import { int32 } from '../native/primitive';

import { AFGResourceSinkSubsystem } from './AFGResourceSinkSubsystem';
import { UFGInventoryComponent } from './UFGInventoryComponent';

export interface AFGBuildableResourceSinkShop {
  /**
   * The inventory that holds the purchases we made in the resource sink shop
   */
  mShopInventory: UFGInventoryComponent;

  /**
   * The size of the inventory that holds the purchases we made in the resource sink shop
   */
  mShopInventoryDefaultSize: int32;

  /**
   * Cached resource sink subsystem
   */
  mResourceSinkSubsystem: AFGResourceSinkSubsystem;
}
