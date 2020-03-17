import { ESplineHologramBuildStep } from '../enums/ESplineHologramBuildStep';
import { uint8 } from '../native/primitive';
import { Unknown } from '../native/unknown';

export interface AFGSplineHologram {
  /**
   * The spline component we're placing.
   */
  mSplineComponent: Unknown<'USplineComponent'>;

  /**
   * This is the data needed to create the spline component (local space).
   */
  mSplineData: Unknown<'FSplinePointData'>[];

  /**
   * Used in the construction message to determine if this has snapped to an existing connection or not
   */
  mIsConnectionSnappedOnConstruction: uint8;

  mBuildStep: ESplineHologramBuildStep;
}
