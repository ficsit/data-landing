import { int32 } from '../native/primitive';

import { UFGRailroadTrackConnectionComponent } from './UFGRailroadTrackConnectionComponent';

export interface AFGBuildableRailroadSwitchControl {
  /**
   * Connection we control.
   */
  mControlledConnection: UFGRailroadTrackConnectionComponent;

  /**
   * Current switch position read from the controlled connection, polled each tick.
   */
  mSwitchPosition: int32;
}
