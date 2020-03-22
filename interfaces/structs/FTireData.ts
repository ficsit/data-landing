import { float, int32 } from '../native/primitive';
import { Vector } from '../native/structs';
import { Unknown } from '../native/unknown';

export interface FTireData {
  /**
   * bool IsInAir;
   */
  SurfaceMaterial: Unknown<'UPhysicalMaterial'>;

  WheelLocation: Vector;

  WheelRadius: float;

  WheelWidth: float;

  WheelIndex: int32;

  IsInAir: boolean;
}
