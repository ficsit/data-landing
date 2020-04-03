import { int32 } from '../native/primitive';

import { FInventoryItem } from './FInventoryItem';

export interface FInventoryStack {
  /**
   * Type of item in this stack.
   */
  Item: FInventoryItem;

  /**
   * Number of items in this stack.
   */
  NumItems: int32;
}
