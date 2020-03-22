import { UFGItemDescriptor } from '../classes/UFGItemDescriptor';
import { classReference } from '../native/references';

import { FSharedInventoryStatePtr } from './FSharedInventoryStatePtr';

export interface FInventoryItem {
  /**
   * The type of item
   */
  ItemClass: classReference<UFGItemDescriptor>;

  /**
   * Optionally store an actor, e.g. an equipment, so we can remember it's state.
   */
  ItemState: FSharedInventoryStatePtr;
}
