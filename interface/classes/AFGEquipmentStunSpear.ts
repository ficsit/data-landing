import { float, int32 } from '../native/primitive';
import { classReference } from '../native/references';
import { Unknown } from '../native/unknown';

import { UFGDamageType } from './UFGDamageType';

export interface AFGEquipmentStunSpear {
  /**
   * Sphere collision component
   */
  mCollisionComp: Unknown<'USphereComponent'>;

  /**
   * Damage type to use when hitting others
   */
  mDamageTypeClass: classReference<UFGDamageType>;

  /**
   * The max amount of time between the first swing that will still trigger the second swing
   */
  mSecondSwingMaxTime: float;

  /**
   * The max amount of time between the first swing that will still trigger the second swing
   */
  mSecondSwingCooldDownTime: float;

  /**
   * Damage amount
   */
  mDamage: int32;

  /**
   * How much inf ront of character the attack is
   */
  mAttackDistance: float;
}
