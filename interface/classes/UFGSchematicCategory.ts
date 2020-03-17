import { FSlateBrush } from '../native/assets';
import { localized } from '../native/primitive';

export interface UFGSchematicCategory {
  /**
   * Name of this build category
   */
  mDisplayName: localized;

  /**
   * Icon for the category
   */
  mCategoryIcon: FSlateBrush;
}
