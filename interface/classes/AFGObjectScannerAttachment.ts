import { Color } from '../native/structs';

export interface AFGObjectScannerAttachment {
  /**
   * True if scanner is beeping
   */
  mIsBeeping: boolean;

  /**
   * Scanner light color
   */
  mScannerLightColor: Color;
}
