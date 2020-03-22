import { float } from '../native/primitive';

import { AFGReplicationDetailActor_BuildableFactory } from './AFGReplicationDetailActor_BuildableFactory';
import { UFGInventoryComponent } from './UFGInventoryComponent';

export interface AFGReplicationDetailActor_Manufacturing extends AFGReplicationDetailActor_BuildableFactory {
  mInputInventory: UFGInventoryComponent;

  mOutputInventory: UFGInventoryComponent;

  mCurrentManufacturingProgress: float;
}
