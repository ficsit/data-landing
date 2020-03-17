import { Unknown } from '../native/unknown';

import { UFGPopupWidget } from './UFGPopupWidget';

export interface UFGBaseUI extends Unknown<'UUserWidget'> {
  /**
   * Current active popup
   */
  mActivePopup: UFGPopupWidget;
}
