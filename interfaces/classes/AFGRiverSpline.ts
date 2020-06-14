import { UAkAudioEvent } from '../native/assets';
import { AActor } from '../native/classes';
import { float } from '../native/primitive';

import { UFGSoundSplineComponent } from './UFGSoundSplineComponent';

export interface AFGRiverSpline extends AActor {
  /**
   * The audio event this river plays
   */
  mAudioEvent: UAkAudioEvent;

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
