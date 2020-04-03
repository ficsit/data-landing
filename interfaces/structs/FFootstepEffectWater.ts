import { float } from '../native/primitive';

import { FFootstepEffect } from './FFootstepEffect';

export interface FFootstepEffectWater {
  /**
   * When at this minimum water depth, then use this footstep effect instead
   */
  MinWaterDepth: float;

  /**
   * The effect we want to play when hitting the surface
   */
  Effect: FFootstepEffect;
}
