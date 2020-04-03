import { Unknown } from '../native/unknown';

import { FInventoryItem } from './FInventoryItem';

export interface FConnectionItemStruct {
  /**
   * The connection to put the item on
   */
  Connection: Unknown<'UFGFactoryConnectionComponent'>;

  /**
   * The item to put on the connection
   */
  Item: FInventoryItem;
}
