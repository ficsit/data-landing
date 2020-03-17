import { float, int32 } from '../native/primitive';
import { FItemAmount } from '../structs/FItemAmount';

import { UFGInventoryComponent } from './UFGInventoryComponent';

export interface AFGBuildableStorage {
  /**
   * How far apart in Z do multiple storages stack.
   */
  mStackingHeight: float;

  /**
   * Default resources in a storage @todo Why this special case here, add the stuff in blueprint instead first time we're being built... I guess this is only used for the tutorial?
   */
  mDefaultResources: FItemAmount[];

  /**
   * The size of the inventory for this storage.
   */
  mInventorySizeX: int32;

  /**
   * The size of the inventory for this storage.
   */
  mInventorySizeY: int32;

  /**
   * The inventory to store everything in. Don't use this directly, use mStorageInventoryHandler->GetActiveInventoryComponent()
   */
  mStorageInventory: UFGInventoryComponent;
}
