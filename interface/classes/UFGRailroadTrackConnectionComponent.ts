import { int32 } from '../native/primitive';
import { Unknown } from '../native/unknown';

import { AFGBuildableRailroadSignal } from './AFGBuildableRailroadSignal';
import { AFGBuildableRailroadStation } from './AFGBuildableRailroadStation';
import { AFGBuildableRailroadSwitchControl } from './AFGBuildableRailroadSwitchControl';
import { UFGConnectionComponent } from './UFGConnectionComponent';
import { UFGRailroadTrackConnectionComponent } from './UFGRailroadTrackConnectionComponent';

export interface UFGRailroadTrackConnectionComponent extends UFGConnectionComponent {
  /**
   * Delegate to fire when changing switch on a track
   */
  mRailRoadSwitchDelegate: Unknown<'FOnRailRoadConnectionSwitched'>;

  /**
   * The components we're connected to. If >1 this is a switch.
   */
  mConnectedComponents: UFGRailroadTrackConnectionComponent[];

  /**
   * If this is a switch, this is the switch position.
   */
  mSwitchPosition: int32;

  /**
   * The switch control associated with this connection, if any.
   */
  mSwitchControl: AFGBuildableRailroadSwitchControl;

  /**
   * The station associated with this connection, if any.
   */
  mStation: AFGBuildableRailroadStation;

  /**
   * The signal associated with this connection, if any.
   * @todotrains
   */
  mSignal: AFGBuildableRailroadSignal;
}
