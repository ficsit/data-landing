import { int32, localized } from '../native/primitive';
import { Unknown } from '../native/unknown';

import { AFGBuildableRailroadStation } from './AFGBuildableRailroadStation';

export interface AFGTrainStationIdentifier extends Unknown<'AInfo'>, Unknown<'IFGSaveInterface'> {
  /**
   * The station this info represents.
   */
  mStation: AFGBuildableRailroadStation;

  /**
   * The track this station is on.
   */
  mTrackGraphID: int32;

  /**
   * Cached here for clients.
   */
  mStationName: localized;
}