import { AFGReplicationDetailActor_GeneratorFuel } from './AFGReplicationDetailActor_GeneratorFuel';
import { UFGInventoryComponent } from './UFGInventoryComponent';

export interface AFGReplicationDetailActor_GeneratorNuclear extends AFGReplicationDetailActor_GeneratorFuel {
  mWasteInventory: UFGInventoryComponent;
}
