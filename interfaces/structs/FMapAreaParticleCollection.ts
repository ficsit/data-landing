import { UFGMapArea } from '../classes/UFGMapArea';
import { UParticleSystem } from '../native/assets';
import { classReference } from '../native/references';

export interface FMapAreaParticleCollection {
  /**
   * Array of map areas that all use the same particle
   */
  Areas: classReference<UFGMapArea>[];

  /**
   * Particle associated with map areas
   */
  Particle: UParticleSystem;
}
