import { IFGSaveInterface } from '../interfaces/IFGSaveInterface';
import { float, uint8 } from '../native/primitive';
import { Unknown } from '../native/unknown';

import { UFGSaveSession } from './UFGSaveSession';

export interface AFGGameMode extends Unknown<'AGameMode'>, IFGSaveInterface {
  mSaveSession: UFGSaveSession;

  /**
   * Last autosave was this id
   */
  mLastAutosaveId: uint8;

  /**
   * The name of the session we are playing
   */
  mSaveSessionName: string;

  /**
   * Selected starting point
   */
  mStartingPointTagName: string;

  /**
   * Command line param -PossesAny will allow players using authorization to posses other players on startup regardless of if their UniqueIds match
   */
  mAllowPossessAny: boolean;

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
