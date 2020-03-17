import { float } from '../native/primitive';
import { Unknown } from '../native/unknown';

import { UFGSoundSplineComponent } from './UFGSoundSplineComponent';

export interface AFGAmbientSoundSpline {
  /**
   * Spline to put multiple positions along.
   */
  mSpline: Unknown<'USplineComponent'>;

  /**
   * AkComponent that plays the sound on the spline.
   */
  mSoundSpline: UFGSoundSplineComponent;

  /**
   * Range that this volume should be significant within
   */
  mSignificanceRange: float;
}
