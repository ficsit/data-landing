import { classReference } from '../native/references';

import { UFGAttack } from './UFGAttack';
import { UFGGameplayTask_Base } from './UFGGameplayTask_Base';

export interface UFGGameplayTask_Attack extends UFGGameplayTask_Base {
  mAttackClass: classReference<UFGAttack>;
}
