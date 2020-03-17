import { float, int32 } from '../native/primitive';
import { classReference } from '../native/references';

import { AFGC4Explosive } from './AFGC4Explosive';

export interface AFGC4Dispenser {
  /**
   * What types of bombs we should spawn
   */
  mC4ExplosiveClass: classReference<AFGC4Explosive>;

  /**
   * Keeps track of the explosives we have dispensed
   */
  mDispensedExplosives: AFGC4Explosive[];

  /**
   * If we charge the throw for this amount of time we will get max throw velocity
   */
  mMaxChargeTime: float;

  /**
   * If we charge the throw to the max we will throw with this force
   */
  mMaxThrowForce: int32;

  /**
   * When we blow shit up we want a small delay in between each explosion
   */
  mDelayBetweenExplosions: float;
}
