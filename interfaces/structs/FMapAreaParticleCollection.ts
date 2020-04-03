import { UFGMapArea } from '../classes/UFGMapArea';
import { classReference } from '../native/references';
import { Unknown } from '../native/unknown';

export interface FMapAreaParticleCollection {
  /**
   * Array of map areas that all use the same particle
   */
  Areas: classReference<UFGMapArea>[];

  /**
   * Particle associated with map areas
   */
  Particle: Unknown<'UParticleSystem'>;
}
