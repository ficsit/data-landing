import { float, int32 } from '../native/primitive';
import { classReference } from '../native/references';
import { FProjectileData } from '../structs/FProjectileData';

import { AFGNobeliskExplosive } from './AFGNobeliskExplosive';
import { AFGWeapon } from './AFGWeapon';

export interface AFGNobeliskDetonator extends AFGWeapon {
  /**
   * Explosive Data (Applied to the explosive projectile on spawn)
   */
  mExplosiveData: FProjectileData;

  /**
   * What types of bombs we should spawn
   */
  mExplosiveClass: classReference<AFGNobeliskExplosive>;

  /**
   * Keeps track of the explosives we have dispensed
   */
  mDispensedExplosives: AFGNobeliskExplosive[];

  /**
   * Tracks waiting for execute fire
   */
  mIsPendingExecuteFire: boolean;

  /**
   * If we charge the throw for this amount of time we will get max throw velocity
   */
  mMaxChargeTime: float;

  /**
   * If we charge the throw to the max we will throw with this force
   */
  mMaxThrowForce: int32;

  /**
   * If we tap the throw, this is the minimum force to throw with
   */
  mMinThrowForce: int32;

  /**
   * When we blow shit up we want a small delay in between each explosion
   */
  mDelayBetweenExplosions: float;
}
