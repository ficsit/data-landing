import { AFGReplicationDetailActor_BuildableFactory } from './AFGReplicationDetailActor_BuildableFactory';
import { UFGInventoryComponent } from './UFGInventoryComponent';

export interface AFGReplicationDetailActor_Storage extends AFGReplicationDetailActor_BuildableFactory {
  mStorageInventory: UFGInventoryComponent;
}
