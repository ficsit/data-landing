import { float } from '../native/primitive';
import { classReference } from '../native/references';
import { Unknown } from '../native/unknown';

import { UFGAmbientSettings } from './UFGAmbientSettings';

export interface AFGAmbientVolume {
  /**
   * The settings for the volume
   */
  mAmbientSettings: classReference<UFGAmbientSettings>;

  /**
   * The audio component we want to move around
   */
  mAudioComponent: Unknown<'UAkComponent'>;

  /**
   * How much further away than the attenuation distance do we want to start playing the ambient OnGeCloseSound
   */
  mAdditionalAttenuationDistance: float;

  /**
   * Range that this volume should be significant within
   */
  mSignificanceRange: float;
}
