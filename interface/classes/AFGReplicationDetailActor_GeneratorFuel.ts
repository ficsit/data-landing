import { AFGReplicationDetailActor_BuildableFactory } from './AFGReplicationDetailActor_BuildableFactory';
import { UFGInventoryComponent } from './UFGInventoryComponent';

export interface AFGReplicationDetailActor_GeneratorFuel extends AFGReplicationDetailActor_BuildableFactory {
  mFuelInventory: UFGInventoryComponent;
}
