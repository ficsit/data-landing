import { Unknown } from '../native/unknown';

export interface UFGGameplayTask_AttackJump {
  mOnJumpAttackFinished: Unknown<'FGenericGameplayTaskDelegate'>;

  mOnJumpAttackFailed: Unknown<'FGenericGameplayTaskDelegate'>;

  /**
   * Should jump logic be handled in the task
   */
  mDoJump: boolean;
}
