import { UParticleSystem } from '../native/assets';
import { int32 } from '../native/primitive';
import { Vector } from '../native/structs';

/**
 * Holds the information necessary for spawning destroyed effects after all overlap calculations
 */
export interface FDestroyedFoliageEffectData {
  SpawnLocation: Vector;

  DestroyedEffect: UParticleSystem;

  Priority: int32;
}
