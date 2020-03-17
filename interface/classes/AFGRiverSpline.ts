import { float } from '../native/primitive';
import { Unknown } from '../native/unknown';

import { UFGSoundSplineComponent } from './UFGSoundSplineComponent';

export interface AFGRiverSpline {
  /**
   * The audio event this river plays
   */
  mAudioEvent: Unknown<'UAkAudioEvent'>;

  /**
   * Distance between each emitter on the spline
   */
  mEmitterInterval: float;

  /**
   * The component that has our sound spline
   */
  mSoundSplineComponent_DEPRECATED: UFGSoundSplineComponent;

  /**
   * If true, then we should have no audio
   */
  mShouldHaveAudio: boolean;
}
