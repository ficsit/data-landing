import { Unknown } from '../native/unknown';

import { UFGGameplayTask_Attack } from './UFGGameplayTask_Attack';

export interface UFGGameplayTask_AttackJump extends UFGGameplayTask_Attack {
  mOnJumpAttackFinished: Unknown<'FGenericGameplayTaskDelegate'>;

  mOnJumpAttackFailed: Unknown<'FGenericGameplayTaskDelegate'>;

  /**
   * Should jump logic be handled in the task
   */
  mDoJump: boolean;
}
