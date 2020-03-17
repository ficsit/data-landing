import { float } from '../native/primitive';
import { classReference } from '../native/references';

import { UFGBuildCategory } from './UFGBuildCategory';
import { UFGBuildSubCategory } from './UFGBuildSubCategory';

export interface UFGBuildDescriptor {
  /**
   * The category in the build menu for this building
   */
  mBuildCategory: classReference<UFGBuildCategory>;

  /**
   * The sub categories in the build menu for this building
   */
  mSubCategories: classReference<UFGBuildSubCategory>[];

  /**
   * The order in the Build Menu is decided by this value. Lower values means earlier in menu. Negative values are allowed. [-N..0..N]
   */
  mBuildMenuPriority: float;
}
