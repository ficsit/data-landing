import { UObject } from '../native/classes';
import { localized } from '../native/primitive';

export interface UFGItemCategory extends UObject {
  /**
   * Name of this item category
   */
  mDisplayName: localized;
}
