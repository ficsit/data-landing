import { UFGItemDescriptor } from '../classes/UFGItemDescriptor';
import { softClassReference } from '../native/references';
import { Unknown } from '../native/unknown';

export interface FDebrisItemDrop {
  /**
   * How many items to spawn, note that the upper limit is guaranteed while the lower limit is not.
   */
  NumItems: Unknown<'FInt32Interval'>;

  /**
   * Item to create pickup for.
   */
  ItemClass: softClassReference<UFGItemDescriptor>;
}
