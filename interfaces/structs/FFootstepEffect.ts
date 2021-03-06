import { UParticleSystem } from '../native/assets';
import { Unknown } from '../native/unknown';

export interface FFootstepEffect {
  /**
   * The particle to use when hitting the ground
   */
  Particle: UParticleSystem;

  /**
   * The decal to place on the ground when walking around
   */
  GroundDecals: Unknown<'UMaterialInterface'>[];
}
