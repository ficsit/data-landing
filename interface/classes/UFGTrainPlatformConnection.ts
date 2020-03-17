import { ETrainPlatformConnectionType } from '../enums/ETrainPlatformConnectionType';
import { uint8 } from '../native/primitive';

import { AFGBuildableTrainPlatform } from './AFGBuildableTrainPlatform';
import { UFGRailroadTrackConnectionComponent } from './UFGRailroadTrackConnectionComponent';
import { UFGTrainPlatformConnection } from './UFGTrainPlatformConnection';

export interface UFGTrainPlatformConnection {
  mComponentDirection: uint8;

  /**
   * Enum indicating the status of this connection
   */
  mPlatformConnectionStatus: ETrainPlatformConnectionType;

  /**
   * store a reference to the owner of this connection as a FGBuildableTrainPlatform, not a UProperty as this is our Owning actor cached so we don't need to keep casting
   */
  platformOwner: AFGBuildableTrainPlatform;

  /**
   * Stores a reference to the track connection (Not a Uproperty because the reference exists in the railroad track)
   */
  mRailroadTrackConnection: UFGRailroadTrackConnectionComponent;

  /**
   * Stores a reference to the connected platform component, if there is one (Not a UProperty as this is just a reference to an external component)
   */
  mConnectedTo: UFGTrainPlatformConnection;
}
