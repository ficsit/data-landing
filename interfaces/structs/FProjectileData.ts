import { AFGProjectile } from '../classes/AFGProjectile';
import { UFGDamageType } from '../classes/UFGDamageType';
import { float, int32 } from '../native/primitive';
import { classReference } from '../native/references';

export interface FProjectileData {
  /**
   * projectile class
   */
  ProjectileClass: classReference<AFGProjectile>;

  /**
   * life time
   */
  ProjectileLifeSpan: float;

  /**
   * How long the projectile will live after it has gotten stuck to something
   */
  ProjectileStickSpan: float;

  /**
   * damage at impact point
   */
  ExplosionDamage: int32;

  /**
   * radius of damage
   */
  ExplosionRadius: float;

  /**
   * Damage dealt to actor that get hit or impacted by this projectile
   */
  ImpactDamage: int32;

  /**
   * If we impact something, should this projectile explode so that it deals radius damage?
   */
  ShouldExplodeOnImpact: boolean;

  /**
   * Indicates if we should explode if we are taking damage from same actor class as ourselves
   */
  CanTriggerExplodeBySameClass: boolean;

  /**
   * Should the projectile explode when it dies of lifespan?
   */
  ExplodeAtEndOfLife: boolean;

  /**
   * type of damage used for impact damage
   */
  DamageType: classReference<UFGDamageType>;

  /**
   * type of damage used for detonation
   */
  DamageTypeExplode: classReference<UFGDamageType>;
}
