import { UTexture2D } from '../native/assets';
import { UObject } from '../native/classes';
import { localized } from '../native/primitive';

export interface UFGMessageSender extends UObject {
  /**
   * Name of the sender
   */
  mSenderName: localized;

  /**
   * Mail adress of the sender
   */
  mSenderMail: localized;

  /**
   * Image of the sender
   */
  mTexture: UTexture2D;
}
