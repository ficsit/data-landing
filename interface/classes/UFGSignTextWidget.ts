import { Unknown } from '../native/unknown';

import { UFGSignElementWidget } from './UFGSignElementWidget';

export interface UFGSignTextWidget extends UFGSignElementWidget {
  /**
   * /
   */
  mTextBlock: Unknown<'UTextBlock'>;
}
