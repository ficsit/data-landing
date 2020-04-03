import { UFGItemDescriptor } from '../classes/UFGItemDescriptor';
import { classReference } from '../native/references';
import { Unknown } from '../native/unknown';

export interface FItemDrop {
  /**
   * Item class
   */
  ItemClass: classReference<UFGItemDescriptor>;

  /**
   * Range of items you can get
   */
  NumItems: Unknown<'FInt32Interval'>;
}
