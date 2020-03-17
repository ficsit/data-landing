import { float } from '../native/primitive';
import { Unknown } from '../native/unknown';

import { AFGBuildablePipeline } from './AFGBuildablePipeline';

export interface AFGPipeBuilderTrail {
  /**
   * Saved pipelines we have to traverse
   */
  mPipesToTraverse: AFGBuildablePipeline[];

  /**
   * Pipeline we are currently traversing
   */
  mCurrentPipeline: AFGBuildablePipeline;

  /**
   * Cached spline to traverse
   */
  mSpline: Unknown<'USplineComponent'>;

  /**
   * How long it should take for trail to complete the spline movement in seconds
   */
  mSpeed: float;
}
