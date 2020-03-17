import { float } from '../native/primitive';
import { Unknown } from '../native/unknown';

import { AFGBuildable } from './AFGBuildable';
import { UFGFactoryLegsComponent } from './UFGFactoryLegsComponent';

export interface AFGBuildableHologram {
  /**
   * The maximum allowed angle on the floor for this hologram to be placed on (in degrees).
   */
  mMaxPlacementFloorAngle: float;

  mLegs: UFGFactoryLegsComponent;

  /**
   * Component to check build clearance to other buildings.
   */
  mClearanceBox: Unknown<'UBoxComponent'>;

  /**
   * If we have snapped to another buildable, i.e. foundation, floor etc, this is it.
   */
  mSnappedBuilding: AFGBuildable;
}
