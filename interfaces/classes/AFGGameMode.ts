import { float, int32, uint8 } from '../native/primitive';
import { Unknown } from '../native/unknown';

import { UFGSaveSession } from './UFGSaveSession';

export interface AFGGameMode extends Unknown<'AGameMode'>, Unknown<'IFGSaveInterface'> {
  mSaveSession: UFGSaveSession;

  /**
   * Last autosave was this id
   */
  mLastAutosaveId: uint8;

  /**
   * The save session (should actually be SaveSessionId
   */
  mSessionId_DEPRECATED: int32;

  /**
   * The name of the session we are playing, migrated over to mSaveSessionName
   */
  mSessionIDString_DEPRECATED: string;

  /**
   * The name of the session we are playing
   */
  mSaveSessionName: string;

  /**
   * Selected starting point
   */
  mStartingPointTagName: string;

  /**
   * Overriding selected starting point when respawning.
   */
  mDebugStartingPointTagName: string;

  /**
   * Config property to reference remote call objects for player controllers
   */
  mDefaultRemoteCallObjectsClassNames: Unknown<'FSoftClassPath'>[];

  /**
   * After how many hours should the server restart itself
   */
  mServerRestartTimeHours: float;

  /**
   * Skips the tutorial step if we play in PIE
   */
  mSkipTutorialInPIE: boolean;

  mIsMainMenu: boolean;
}
