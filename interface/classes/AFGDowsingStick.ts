import { AActor } from '../native/classes';
import { int32 } from '../native/primitive';

export interface AFGDowsingStick {
  /**
   * How many water volumes to check distance to per frame
   */
  mNumVolumesPerTick: int32;

  mWaterVolumes: AActor[];
}
