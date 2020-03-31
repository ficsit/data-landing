import { Unknown } from '../native/unknown';

import { UFGBaseUI } from './UFGBaseUI';

export interface AFGHUDBase extends Unknown<'AHUD'> {
  /**
   * Reference to the UI widget
   */
  mBaseUI: UFGBaseUI;
}
