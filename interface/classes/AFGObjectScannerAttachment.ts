import { Color } from '../native/structs';

import { AFGEquipmentAttachment } from './AFGEquipmentAttachment';

export interface AFGObjectScannerAttachment extends AFGEquipmentAttachment {
  /**
   * True if scanner is beeping
   */
  mIsBeeping: boolean;

  /**
   * Scanner light color
   */
  mScannerLightColor: Color;
}
