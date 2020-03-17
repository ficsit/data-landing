import { Unknown } from '../native/unknown';

import { UFGRoadConnectionComponent } from './UFGRoadConnectionComponent';
import { UFGSplineComponent } from './UFGSplineComponent';

export interface AFGBuildableRoad {
  /**
   * First connection on track
   */
  mConnection0: UFGRoadConnectionComponent;

  /**
   * Second connection on tack
   */
  mConnection1: UFGRoadConnectionComponent;

  /**
   * The spline component for this train track.
   */
  mSplineComponent: UFGSplineComponent;

  /**
   * Spline data saved in a compact form for saving and replicating. All the vectors are in local space.
   */
  mSplineData: Unknown<'FSplinePointData'>[];
}
