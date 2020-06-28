import { float, localized } from '../native/primitive';
import { Unknown } from '../native/unknown';
import { FAudioSubtitlePair } from '../structs/FAudioSubtitlePair';

import { UFGMessageBase } from './UFGMessageBase';

export interface UFGAudioMessage extends UFGMessageBase {
  /**
   * The Ak component
   */
  mAkAudioComponent: Unknown<'UAkComponent'>;

  /**
   * The AK audio to play when "showing" this message
   */
  mAudioEvents: FAudioSubtitlePair[];

  /**
   * Current dialogue that is displayed
   */
  mCurrentDialogue: FAudioSubtitlePair;

  /**
   * Multiplier for time per character to display
   */
  mSubtitleTimeMultiplier: float;

  /**
   * Text that can be displayed instead for (or added to) subtitle text when displaying the message
   */
  mOverrideText: localized;

  /**
   * Multiplier for time per character to display
   */
  mShowOnlyOverrideText: boolean;

  mAudioMessageConcluded: Unknown<'FAudioMessageConcludedDelegate'>;

  mAudioMessageInputComponent: Unknown<'UInputComponent'>;
}
