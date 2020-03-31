import { int32 } from '../native/primitive';
import { Vector } from '../native/structs';
import { Unknown } from '../native/unknown';

/**
 * Holds the information necessary for spawning destroyed effects after all overlap calculations
 */
export interface FDestroyedFoliageEffectData {
  SpawnLocation: Vector;

  DestroyedEffect: Unknown<'UParticleSystem'>;

  Priority: int32;
}
