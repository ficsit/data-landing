import { float } from '../native/primitive';
import { Unknown } from '../native/unknown';

import { AFGSplinePath } from './AFGSplinePath';

export interface AFGManta {
  /**
   * Reference to the spline that was added in BP
   */
  mCachedSpline: Unknown<'USplineComponent'>;

  /**
   * Path spline that this actor should set to follow
   */
  mSplinePath: AFGSplinePath;

  /**
   * Reference to the skel mesh that was added in BP
   */
  mCachedMesh: Unknown<'USkeletalMeshComponent'>;

  /**
   * Current time ( value between 0.0 and mSecondsPerLoop
   */
  mCurrentTime: float;

  /**
   * Magnitude of the offset to add
   */
  mOffsetMagnitude: float;

  /**
   * How many seconds a complete loop should take ( defaults to 900 ie 15 minutes )
   */
  mSecondsPerLoop: float;

  /**
   * Range that this volume should be significant within
   */
  mSignificanceRange: float;

  /**
   * Should we tick this mesh
   */
  mTickTransform: boolean;

  /**
   * Is the spline loop closed
   */
  mIsClosedSplineLoop: boolean;
}
