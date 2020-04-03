import { UFGItemDescriptor } from '../classes/UFGItemDescriptor';
import { int32 } from '../native/primitive';
import { classReference } from '../native/references';

export interface FItemAmount {
  /**
   * The item.
   */
  ItemClass: classReference<UFGItemDescriptor>;

  /**
   * The amount of this item.
   */
  Amount: int32;
}
