import { UFGMessageSender } from '../classes/UFGMessageSender';
import { UAkAudioEvent } from '../native/assets';
import { localized } from '../native/primitive';
import { classReference } from '../native/references';

export interface FAudioSubtitlePair {
  /**
   * Audio to play
   */
  AudioEvent: UAkAudioEvent;

  /**
   * Subtitle to display
   */
  Subtitle: localized;

  /**
   * Sender for this part of message
   */
  SenderClass: classReference<UFGMessageSender>;
}
