import { AFGReplicationDetailActor_BuildableFactory } from './AFGReplicationDetailActor_BuildableFactory';
import { UFGInventoryComponent } from './UFGInventoryComponent';

export interface AFGReplicationDetailActor_CargoPlatform extends AFGReplicationDetailActor_BuildableFactory {
  mCargoInventory: UFGInventoryComponent;
}
