import { UParticleSystem } from '../native/assets';
import { Unknown } from '../native/unknown';

export interface FParticleTemplatePair {
  Template: UParticleSystem;

  Particle: Unknown<'UParticleSystemComponent'>;
}
