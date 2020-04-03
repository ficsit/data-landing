import { UFGMessageSender } from '../classes/UFGMessageSender';
import { localized } from '../native/primitive';
import { classReference } from '../native/references';
import { Unknown } from '../native/unknown';

export interface FAudioSubtitlePair {
  /**
   * Audio to play
   */
  AudioEvent: Unknown<'UAkAudioEvent'>;

  /**
   * Subtitle to display
   */
  Subtitle: localized;

  /**
   * Sender for this part of message
   */
  SenderClass: classReference<UFGMessageSender>;
}
