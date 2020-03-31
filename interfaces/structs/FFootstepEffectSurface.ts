import { Unknown } from '../native/unknown';

import { FFootstepEffect } from './FFootstepEffect';

export interface FFootstepEffectSurface {
  /**
   * The surface the foot hit
   */
  Surface: Unknown<'EPhysicalSurface'>;

  /**
   * The effect we want to play when hitting the surface
   */
  Effect: FFootstepEffect;
}
