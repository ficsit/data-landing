import { int32, uint8 } from '../native/primitive';

import { AFGBuildableWire } from './AFGBuildableWire';
import { UFGCircuitConnectionComponent } from './UFGCircuitConnectionComponent';
import { UFGConnectionComponent } from './UFGConnectionComponent';

export interface UFGCircuitConnectionComponent extends UFGConnectionComponent {
  /**
   * How many connections this component can have connected.
   */
  mMaxNumConnectionLinks: int32;

  /**
   * This connection is hidden and can only be connected through the code. E.g. powered walls have a hidden connection all machines connect to.
   */
  mIsHiddenConnection: boolean;

  /**
   * The wired connections to this.
   */
  mWires: AFGBuildableWire[];

  /**
   * The wired connections to this.
   */
  mNbWiresConnected: uint8;

  /**
   * The non-wired (if this or the other is hidden) connections to this.
   */
  mHiddenConnections: UFGCircuitConnectionComponent[];

  mCircuitID: int32;
}
