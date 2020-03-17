import { UFGRoadConnectionComponent } from './UFGRoadConnectionComponent';

export interface AFGRoadHologram {
  /**
   * The connections we have.
   */
  mConnectionComponents: UFGRoadConnectionComponent;

  /**
   * The connection we snapped to.
   */
  mSnappedConnectionComponents: UFGRoadConnectionComponent;
}
