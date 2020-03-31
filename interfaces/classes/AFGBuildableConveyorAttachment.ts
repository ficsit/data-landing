import { AFGBuildableFactory } from './AFGBuildableFactory';
import { UFGInventoryComponent } from './UFGInventoryComponent';

export interface AFGBuildableConveyorAttachment extends AFGBuildableFactory {
  /**
   * The inventory to store everything in. Don't use this directly, use mStorageInventoryHandler->GetActiveInventoryComponent()
   */
  mBufferInventory: UFGInventoryComponent;
}
