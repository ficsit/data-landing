import { float } from '../native/primitive';
import { Unknown } from '../native/unknown';

import { UFGAudioMessage } from './UFGAudioMessage';
import { UFGInteractWidget } from './UFGInteractWidget';

export interface UFGGameUI {
  /**
   * so if you already are listening for mouse input you might get this and your own event
   */
  mOnMouseButtonDown: Unknown<'FOnMouseButtonDown'>;

  /**
   * A stack with widgets that are currently open
   */
  mInteractWidgetStack: UFGInteractWidget[];

  /**
   * Message that is being played now ( can be null )
   */
  mCurrentAudioMessage: UFGAudioMessage;

  /**
   * How much time must pass between receiving audio messages at least?
   */
  mMinTimeBetweenAudioMessage: float;
}
