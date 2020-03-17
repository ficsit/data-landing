import { AFGBuildableFoundation } from './AFGBuildableFoundation';
import { AFGSplineHologram } from './AFGSplineHologram';

export interface AFGRailroadBridgeHologram extends AFGSplineHologram {
  /**
   * Where we snapped.
   */
  mSnappedFoundation: AFGBuildableFoundation;
}
