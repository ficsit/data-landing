import { int32 } from '../native/primitive';
import { classReference } from '../native/references';

import { UFGInventoryComponent } from './UFGInventoryComponent';
import { UFGItemDescriptor } from './UFGItemDescriptor';
import { UFGPipeConnectionComponentBase } from './UFGPipeConnectionComponentBase';

export interface UFGPipeConnectionComponent extends UFGPipeConnectionComponentBase {
  /**
   * The inventory of this connection. This can be null in many cases.
   */
  mConnectionInventory: UFGInventoryComponent;

  mInventoryAccessIndex: int32;

  mPipeNetworkID: int32;

  /**
   * we need this to work for the play test so for now lets go with ugly.
   */
  mFluidDescriptor: classReference<UFGItemDescriptor>;
}
