import { float } from '../native/primitive';
import { classReference } from '../native/references';
import { Unknown } from '../native/unknown';
import { FSplineSupportPair } from '../structs/FSplineSupportPair';

import { AFGBuildablePipelineSupport } from './AFGBuildablePipelineSupport';
import { AFGPipeBuilderTrail } from './AFGPipeBuilderTrail';
import { AFGPipelineSupportHologram } from './AFGPipelineSupportHologram';
import { AFGSplineHologram } from './AFGSplineHologram';
import { AFGVehicle } from './AFGVehicle';
import { UFGRecipe } from './UFGRecipe';

export interface AFGPipeBuilder extends AFGVehicle {
  /**
   * The main skeletal mesh associated with this Vehicle
   */
  mMovementComponent: Unknown<'UFloatingPawnMovement'>;

  /**
   * Component used to determine generators location
   */
  mPipeSupportLocation: Unknown<'USceneComponent'>;

  /**
   * The hologram to build.
   */
  mSplineHologram: AFGSplineHologram;

  /**
   * Hologra of pipe support that indicates where to build the pipe to
   */
  mSupportHologram: AFGPipelineSupportHologram;

  /**
   * What recipe to use for the pipe support
   */
  mCurrentSplineSupportRecipeClass: classReference<UFGRecipe>;

  /**
   * What recipe to use for the spline
   */
  mCurrentSplineRecipeClass: classReference<UFGRecipe>;

  /**
   * The pipe support that the pipe is built from
   */
  mInternalSplineSupport: AFGBuildablePipelineSupport;

  /**
   * Result of the latest trace.
   */
  mHitResult: Unknown<'FHitResult'>;

  /**
   * How long time the movement should take in seconds
   */
  mMoveTime: float;

  /**
   * Curve used for height offset when moving
   */
  mHeightCurve: Unknown<'UCurveFloat'>;

  /**
   * Class of what trail to use
   */
  mTrailClass: classReference<AFGPipeBuilderTrail>;

  /**
   * Cached reference to the trail actor
   */
  mTrail: AFGPipeBuilderTrail;

  /**
   * Array with what spline based recipes can be built and their corresponding supports
   */
  mSplineAndSupportData: FSplineSupportPair[];

  /**
   * What distance to keep between trail and pipe builder
   */
  mTrailDistance: float;
}
