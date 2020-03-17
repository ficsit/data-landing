import { Unknown } from '../native/unknown';

import { UFGSplineComponent } from './UFGSplineComponent';

export interface AFGBuildableRailroadBridge {
  /**
   * The spline component for this bridge.
   */
  mSplineComponent: UFGSplineComponent;

  /**
   * Spline data saved in a compact form for saving and replicating. All the vectors are in local space.
   */
  mSplineData: Unknown<'FSplinePointData'>[];
}
