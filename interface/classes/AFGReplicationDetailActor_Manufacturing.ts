import { float } from '../native/primitive';

import { UFGInventoryComponent } from './UFGInventoryComponent';

export interface AFGReplicationDetailActor_Manufacturing {
  mInputInventory: UFGInventoryComponent;

  mOutputInventory: UFGInventoryComponent;

  mCurrentManufacturingProgress: float;
}
