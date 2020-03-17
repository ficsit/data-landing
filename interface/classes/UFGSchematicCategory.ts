import { FSlateBrush } from '../native/assets';
import { UObject } from '../native/classes';
import { localized } from '../native/primitive';

export interface UFGSchematicCategory extends UObject {
  /**
   * Name of this build category
   */
  mDisplayName: localized;

  /**
   * Icon for the category
   */
  mCategoryIcon: FSlateBrush;
}
