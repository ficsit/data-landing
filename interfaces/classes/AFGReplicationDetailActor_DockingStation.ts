import { AFGReplicationDetailActor_BuildableFactory } from './AFGReplicationDetailActor_BuildableFactory';
import { UFGInventoryComponent } from './UFGInventoryComponent';

export interface AFGReplicationDetailActor_DockingStation extends AFGReplicationDetailActor_BuildableFactory {
  mCargoInventory: UFGInventoryComponent;

  mFuelInventory: UFGInventoryComponent;
}
