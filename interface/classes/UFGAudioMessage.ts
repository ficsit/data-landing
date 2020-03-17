import { float } from '../native/primitive';
import { Unknown } from '../native/unknown';
import { FAudioSubtitlePair } from '../structs/FAudioSubtitlePair';

export interface UFGAudioMessage {
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

  mAudioMessageConcluded: Unknown<'FAudioMessageConcludedDelegate'>;

  mAudioMessageInputComponent: Unknown<'UInputComponent'>;
}
