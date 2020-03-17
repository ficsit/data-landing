import { float } from '../native/primitive';
import { Unknown } from '../native/unknown';

export interface UFGCameraModifierSlide extends Unknown<'UCameraModifier'> {
  /**
   * The min rotation in pitch
   */
  mMinPitch: float;
}
