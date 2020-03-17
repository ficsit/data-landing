import { IFGAggroTargetInterface } from '../interfaces/IFGAggroTargetInterface';
import { ScriptInterface } from '../native/references';
import { Unknown } from '../native/unknown';

export interface UFGGameplayTask_AttackMelee {
  mOnAttackFinished: Unknown<'FGenericGameplayTaskDelegate'>;

  mOnAttackFailed: Unknown<'FGenericGameplayTaskDelegate'>;

  /**
   * The target we are attacking
   */
  mAttackTarget: ScriptInterface<IFGAggroTargetInterface>;
}
