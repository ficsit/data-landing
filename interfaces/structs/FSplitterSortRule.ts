import { UFGItemDescriptor } from '../classes/UFGItemDescriptor';
import { int32 } from '../native/primitive';
import { classReference } from '../native/references';

export interface FSplitterSortRule {
  /**
   * This is the item class to filter out.
   */
  ItemClass: classReference<UFGItemDescriptor>;

  /**
   * Which output to send this to.
   */
  OutputIndex: int32;
}
