import { int32 } from '../native/primitive';

import { AFGBuildableFactory } from './AFGBuildableFactory';
import { UFGRailroadTrackConnectionComponent } from './UFGRailroadTrackConnectionComponent';

export interface AFGBuildableRailroadSwitchControl extends AFGBuildableFactory {
  /**
   * Connection we control.
   */
  mControlledConnection: UFGRailroadTrackConnectionComponent;

  /**
   * Current switch position read from the controlled connection, polled each tick.
   */
  mSwitchPosition: int32;
}
