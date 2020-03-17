import { float } from '../native/primitive';
import { Unknown } from '../native/unknown';
import { FInventoryStack } from '../structs/FInventoryStack';

import { AFGCharacterPlayer } from './AFGCharacterPlayer';

export interface AFGItemPickup {
  /**
   * The amount of time required to pickup < 0 == instant
   */
  mTimeToPickUp: float;

  /**
   * The player collecting the item
   */
  mCollector: AFGCharacterPlayer;

  /**
   * Timer handler for item being picked up
   */
  mCollectingTimerHandle: Unknown<'FTimerHandle'>;

  /**
   * The items we want to be able to pickup
   */
  mPickupItems: FInventoryStack;

  /**
   * If set to true, then we destroy the item when it's pickup:ed
   */
  mDestroyOnPickup: boolean;

  /**
   * ak component that plays sound
   */
  mSoundComponent: Unknown<'UAkComponent'>;

  /**
   * The ak event to post for the sound
   */
  mAudioEvent: Unknown<'UAkAudioEvent'>;
}
