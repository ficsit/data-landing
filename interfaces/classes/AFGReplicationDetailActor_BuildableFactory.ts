import { AFGReplicationDetailActor } from './AFGReplicationDetailActor';
import { UFGInventoryComponent } from './UFGInventoryComponent';

export interface AFGReplicationDetailActor_BuildableFactory extends AFGReplicationDetailActor {
  mInventoryPotential: UFGInventoryComponent;
}
