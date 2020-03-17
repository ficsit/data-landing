import { int32 } from '../native/primitive';
import { Unknown } from '../native/unknown';

export interface AFGDestructiveProjectile {
  /**
   * Collision Component used to determine which objects should be considered for destruction
   */
  mDestructionCollisionComp: Unknown<'USphereComponent'>;

  /**
   * Should actors implementing destructable interfaces be considered for destruction
   */
  mDestroysRelevantActors: boolean;

  /**
   * Should foliage be considered for destruction
   */
  mDestroysFoliage: boolean;

  /**
   * Any amount of particle systems over this limit will not be spawned
   */
  mMaxParticleSpawnsPerDetonation: int32;
}
