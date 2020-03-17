import { ETrainPlatformDockingStatus } from '../enums/ETrainPlatformDockingStatus';
import { Unknown } from '../native/unknown';

import { AFGBuildableFactory } from './AFGBuildableFactory';
import { AFGBuildableRailroadStation } from './AFGBuildableRailroadStation';
import { AFGBuildableRailroadTrack } from './AFGBuildableRailroadTrack';
import { AFGRailroadVehicle } from './AFGRailroadVehicle';
import { UFGTrainPlatformConnection } from './UFGTrainPlatformConnection';

export interface AFGBuildableTrainPlatform extends AFGBuildableFactory {
  mRailroadTrack: AFGBuildableRailroadTrack;

  mPlatformConnections: UFGTrainPlatformConnection[];

  mPlatformConnection0: UFGTrainPlatformConnection;

  mPlatformConnection1: UFGTrainPlatformConnection;

  mDockedRailroadVehicle: AFGRailroadVehicle;

  /**
   * Stores a reference to the station that initiated a docking sequence. Used to notify the station that we have completed
   */
  mStationDockingMaster: AFGBuildableRailroadStation;

  /**
   * Is this platform reversed from its attached station?
   */
  mIsOrientationReversed: boolean;

  /**
   * Where are we in the docking status. Updated by the mDockingSequenceTimer which is set by NotifyTrainDocked
   */
  mPlatformDockingStatus: ETrainPlatformDockingStatus;

  /**
   * However since it also drives the anim blueprint undesired anim starts are triggered if we save / modify the actually used mPlatformDockingStatus
   */
  mSavedDockingStatus: ETrainPlatformDockingStatus;

  /**
   * Timer handle that is set and retriggered over the course of a docking sequence
   */
  mDockingSequenceTimerHandle: Unknown<'FTimerHandle'>;
}
