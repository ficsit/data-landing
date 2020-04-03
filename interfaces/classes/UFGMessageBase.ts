import { EMessageType } from '../enums/EMessageType';
import { UTexture2D } from '../native/assets';
import { localized } from '../native/primitive';
import { classReference } from '../native/references';
import { Unknown } from '../native/unknown';

import { UFGMessageSender } from './UFGMessageSender';

export interface UFGMessageBase extends Unknown<'UUserWidget'> {
  /**
   * I think this may be the title
   */
  mTitle: localized;

  /**
   * Preview text when a message is added
   */
  mPreviewText: localized;

  /**
   * Should the message be displayed in a popup?
   */
  mIsPopup: boolean;

  /**
   * Who sent the message
   */
  mSenderClass: classReference<UFGMessageSender>;

  /**
   * What type is it
   */
  mType: EMessageType;

  /**
   * Images to display in the codex
   */
  mImages: UTexture2D[];
}
