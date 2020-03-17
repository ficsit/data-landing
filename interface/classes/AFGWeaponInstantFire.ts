import { float } from '../native/primitive';
import { Unknown } from '../native/unknown';

export interface AFGWeaponInstantFire {
  /**
   * Instant hit damage
   */
  mInstantHitDamage: float;

  /**
   * How far we should trace for the weapon
   */
  mWeaponTraceLength: float;

  /**
   * The particle to use when hitting the ground
   */
  mHitParticleEffect: Unknown<'UParticleSystem'>;
}
