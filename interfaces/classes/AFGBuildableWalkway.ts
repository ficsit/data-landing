import { float } from '../native/primitive';
import { FFoundationSideSelectionFlags } from '../structs/FFoundationSideSelectionFlags';

import { AFGBuildableFactoryBuilding } from './AFGBuildableFactoryBuilding';

export interface AFGBuildableWalkway extends AFGBuildableFactoryBuilding {
  /**
   * Size of the walkway (size of one side of the square part).
   */
  mSize: float;

  /**
   * Elevation of this walkway if ramp, assumes the ramp to go up towards a positive X.
   */
  mElevation: float;

  /**
   * Disable snapping on specific sides.
   */
  mDisableSnapOn: FFoundationSideSelectionFlags;
}
