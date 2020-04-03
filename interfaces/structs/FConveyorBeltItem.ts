import { float } from '../native/primitive';

import { FInventoryItem } from './FInventoryItem';

export interface FConveyorBeltItem {
  /**
   * The type of this item.
   */
  Item: FInventoryItem;

  Offset: float;
}
