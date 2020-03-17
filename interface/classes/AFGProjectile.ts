import { Vector } from '../native/structs';
import { Unknown } from '../native/unknown';
import { FProjectileData } from '../structs/FProjectileData';

import { AFGPlayerController } from './AFGPlayerController';

export interface AFGProjectile {
  /**
   * projectile data
   */
  mProjectileData: FProjectileData;

  /**
   * did it explode?
   */
  mHasExploded: boolean;

  /**
   * Used to get the velocity over to clients
   */
  mInitialVelocity: Vector;

  /**
   * Sphere collision component
   */
  mCollisionComp: Unknown<'USphereComponent'>;

  /**
   * Projectile movement component
   */
  mProjectileMovement: Unknown<'UProjectileMovementComponent'>;

  /**
   * Location we are aiming at ( if any )
   */
  mTargetLocation: Vector;

  /**
   * Indicates if we should explode if we are taking damage from same actor class as ourselves
   */
  mCanTriggerExplodeBySameClass: boolean;

  /**
   * Should the projectile explode when it dies of lifespan?
   */
  mExplodeAtEndOfLife: boolean;

  /**
   * Caching the PC so that we can do damage even without a valid weapon
   */
  mCachedPC: AFGPlayerController;
}
