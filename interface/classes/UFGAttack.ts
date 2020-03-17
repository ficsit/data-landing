import { float, int32 } from '../native/primitive';
import { classReference } from '../native/references';
import { Unknown } from '../native/unknown';

export interface UFGAttack {
  /**
   * Animation to play when attacking
   */
  mAttackMontage: Unknown<'UAnimMontage'>;

  /**
   * True if this attack stops movement
   */
  mStopsMovement: boolean;

  /**
   * How far can we attack
   */
  mAttackRange: float;

  /**
   * How far can we attack
   */
  mAttackActivationDistance: float;

  /**
   * How much damage to do when hitting
   */
  mDamage: int32;

  /**
   * Damage type that this attack uses
   */
  mDamageType: classReference<Unknown<'UDamageType'>>;

  /**
   * Angle that target must be within in order to hit with attack ( 180 = full circle hit area )
   */
  mAttackAngle: float;
}
