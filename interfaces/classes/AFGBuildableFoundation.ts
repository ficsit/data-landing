import { float } from '../native/primitive';
import { FFoundationSideSelectionFlags } from '../structs/FFoundationSideSelectionFlags';

import { AFGBuildableFactoryBuilding } from './AFGBuildableFactoryBuilding';

export interface AFGBuildableFoundation extends AFGBuildableFactoryBuilding {
  /**
   * Size of the foundation (size of one side of the square).
   */
  mSize: float;

  /**
   * Height of the foundation. Origo is assumed to be half way between.
   */
  mHeight: float;

  /**
   * Elevation of this foundation if ramp, assumes the ramp to go down towards a positive X.
   */
  mElevation: float;

  /**
   * Disable snapping on specific sides.
   */
  mDisableSnapOn: FFoundationSideSelectionFlags;
}
