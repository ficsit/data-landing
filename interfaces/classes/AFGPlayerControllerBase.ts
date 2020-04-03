import { Unknown } from '../native/unknown';

import { AFGAdminInterface } from './AFGAdminInterface';
import { UFGCheatManager } from './UFGCheatManager';

export interface AFGPlayerControllerBase extends Unknown<'APlayerController'> {
  /**
   * Called when we rebind any key
   */
  OnInputChanged: Unknown<'FOnInputChanged'>;

  /**
   * Admin interface if we have one available
   */
  mAdminInterface: AFGAdminInterface;

  /**
   * If we are allowed to cheat, then we replicate the cheat manager
   */
  mReplicatedCheatManager: UFGCheatManager;

  /**
   * The input component used when we want to disable our input
   */
  mDisableInputComponent: Unknown<'UInputComponent'>;

  /**
   * The input component used when we want to enable our input
   */
  mEnableInputComponent: Unknown<'UInputComponent'>;

  /**
   * Input that's allowed when you are dead
   */
  mAllowedInputWhenDead: string[];
}
