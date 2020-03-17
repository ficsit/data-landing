import { classReference } from '../native/references';

import { AFGFactoryHologram } from './AFGFactoryHologram';
import { AFGRailroadTrackHologram } from './AFGRailroadTrackHologram';
import { UFGRecipe } from './UFGRecipe';
import { UFGTrainPlatformConnection } from './UFGTrainPlatformConnection';

export interface AFGTrainPlatformHologram extends AFGFactoryHologram {
  /**
   * Overrides floor snapping and forces platforms to only snap to other platforms (not true for stations, true for other platforms)
   */
  mRequireSnapToPlatform: boolean;

  mRailroadTrackRecipe: classReference<UFGRecipe>;

  /**
   * The Railroad hologram
   */
  mRailroadTrackHologram: AFGRailroadTrackHologram;

  /**
   * The components of this hologram used for detecting platform snapping
   */
  mPlatformConnectionComponents: UFGTrainPlatformConnection;

  /**
   * Stores a reference to the other platforms this hologram is connecting to
   */
  mConnectedPlatformComponents: UFGTrainPlatformConnection;
}
