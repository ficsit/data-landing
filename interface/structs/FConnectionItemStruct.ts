import { UFGFactoryConnectionComponent } from '../classes/UFGFactoryConnectionComponent';

import { FInventoryItem } from './FInventoryItem';

export interface FConnectionItemStruct {
  /**
   * The connection to put the item on
   */
  Connection: UFGFactoryConnectionComponent;

  /**
   * The item to put on the connection
   */
  Item: FInventoryItem;
}
