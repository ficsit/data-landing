import { AActor } from '../native/classes';

import { UFGGameplayTask_Attack } from './UFGGameplayTask_Attack';

export interface AFGEnemy {
  /**
   * The current attack that the pawn is issuing @todoai: Verify if clients need this replicated or if the task get a activate on clients too
   */
  mCurrentAttack: UFGGameplayTask_Attack;

  mCurrentAggroTarget: AActor;
}
