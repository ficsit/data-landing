import { UParticleSystem } from '../native/assets';
import { Unknown } from '../native/unknown';

export interface FSurfaceParticlePair {
  EmitterTemplate: UParticleSystem;

  Surface: Unknown<'EPhysicalSurface'>;
}
