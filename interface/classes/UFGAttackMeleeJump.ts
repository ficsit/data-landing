import { float } from '../native/primitive';
import { Vector } from '../native/structs';
import { Unknown } from '../native/unknown';

import { UFGAttackMelee } from './UFGAttackMelee';

export interface UFGAttackMeleeJump extends UFGAttackMelee {
  /**
   * From where in relation to the target should the jump start
   */
  mJumpRange: float;

  /**
   * Velocity when jumping ( excluding the Z velocity which is handled by the Jump() in Character
   */
  mJumpVelocity: Vector;

  /**
   * Animation to play before jumping
   */
  mPreJumpMontage: Unknown<'UAnimMontage'>;
}
