import { AActor } from '../native/classes';
import { int32 } from '../native/primitive';

import { AFGEquipment } from './AFGEquipment';

export interface AFGDowsingStick extends AFGEquipment {
  /**
   * How many water volumes to check distance to per frame
   */
  mNumVolumesPerTick: int32;

  mWaterVolumes: AActor[];
}
