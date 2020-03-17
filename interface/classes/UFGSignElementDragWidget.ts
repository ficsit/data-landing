import { Unknown } from '../native/unknown';

import { UFGSignElementWidget } from './UFGSignElementWidget';

export interface UFGSignElementDragWidget extends Unknown<'UUserWidget'> {
  /**
   * Hold a reference to the widget we are representing
   */
  mElementReference: UFGSignElementWidget;

  /**
   * /
   */
  mSizeBox: Unknown<'USizeBox'>;

  mBackground: Unknown<'UImage'>;
}
