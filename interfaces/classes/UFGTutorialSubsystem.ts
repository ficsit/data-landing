import { UObject } from '../native/classes';
import { classReference } from '../native/references';
import { Unknown } from '../native/unknown';
import { FTutorialData } from '../structs/FTutorialData';

import { AFGPlayerState } from './AFGPlayerState';
import { UFGMessageBase } from './UFGMessageBase';

export interface UFGTutorialSubsystem extends UObject, Unknown<'IFGSaveInterface'> {
  /**
   * classes of things we have build
   */
  mBuildingsBuilt: classReference<UObject>[];

  /**
   * Used to indicate if we should push the intro messages
   */
  mHasSeenIntroTutorial: boolean;

  /**
   * Messages to display when first starting the game
   */
  mIntroTutorialMessages: classReference<UFGMessageBase>[];

  /**
   * In this array we specify what buildings we want in-game tutorial for
   */
  mTutorialData: FTutorialData[];

  /**
   * Needed to set up delegates
   */
  mOwningPlayerState: AFGPlayerState;
}
