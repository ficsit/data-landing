import { AFGSplineHologram } from './AFGSplineHologram';
import { UFGRoadConnectionComponent } from './UFGRoadConnectionComponent';

export interface AFGRoadHologram extends AFGSplineHologram {
  /**
   * The connections we have.
   */
  mConnectionComponents: UFGRoadConnectionComponent;

  /**
   * The connection we snapped to.
   */
  mSnappedConnectionComponents: UFGRoadConnectionComponent;
}
