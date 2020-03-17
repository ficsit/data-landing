import { int32 } from '../native/primitive';

import { AFGEquipment } from './AFGEquipment';

export interface AFGToolBelt extends AFGEquipment {
  /**
   * How many arm slots are added by this belt
   */
  mNumArmSlotsToUnlock: int32;
}
