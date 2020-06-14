import { UParticleSystem } from '../native/assets';
import { float } from '../native/primitive';

import { AFGWeapon } from './AFGWeapon';

export interface AFGWeaponInstantFire extends AFGWeapon {
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
  mHitParticleEffect: UParticleSystem;
}
