import { Unknown } from '../native/unknown';
import { FFGModPackage } from '../structs/FFGModPackage';
import { FOnJoinSessionData } from '../structs/FOnJoinSessionData';

import { UFGErrorMessage } from './UFGErrorMessage';
import { UFGMusicManager } from './UFGMusicManager';
import { UFGSaveSystem } from './UFGSaveSystem';

export interface UFGGameInstance extends Unknown<'UGameInstance'> {
  /**
   * The global save system
   */
  mSaveSystem: UFGSaveSystem;

  /**
   * Called whenever a new error is added that doesn't send you to main menu
   */
  mOnNewError: Unknown<'FOnNewError'>;

  mOnNetworkErrorRecieved: Unknown<'FOnNetworkErrorRecieved'>;

  /**
   * The global Analytics Service
   */
  mAnalyticsService: Unknown<'UAnalyticsService'>;

  /**
   * List of errors that we should pop
   */
  mErrorList: UFGErrorMessage[];

  /**
   * Storing data for joining a session
   */
  mJoinSessionData: FOnJoinSessionData;

  /**
   * Called when the state of joining session has been updated
   */
  mOnJoinSessionStateUpdated: Unknown<'FOnJoinSessionStateChanged'>;

  /**
   * Called when nat-type is updated
   */
  mOnNatTypeUpdated: Unknown<'FOnNatTypeUpdated'>;

  /**
   * Mod packages found - valid or invalid
   */
  ModPackages: FFGModPackage[];

  /**
   * Controlling our music since... 2018
   */
  mMusicManager: UFGMusicManager;
}
