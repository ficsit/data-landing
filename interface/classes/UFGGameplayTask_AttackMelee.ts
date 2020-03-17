import { IFGAggroTargetInterface } from '../interfaces/IFGAggroTargetInterface';
import { ScriptInterface } from '../native/references';
import { Unknown } from '../native/unknown';

import { UFGGameplayTask_Attack } from './UFGGameplayTask_Attack';

export interface UFGGameplayTask_AttackMelee extends UFGGameplayTask_Attack {
  mOnAttackFinished: Unknown<'FGenericGameplayTaskDelegate'>;

  mOnAttackFailed: Unknown<'FGenericGameplayTaskDelegate'>;

  /**
   * The target we are attacking
   */
  mAttackTarget: ScriptInterface<IFGAggroTargetInterface>;
}
