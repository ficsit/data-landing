import { Unknown } from '../native/unknown';

import { AFGEnemy } from './AFGEnemy';

export interface UFGGameplayTask_Base extends Unknown<'UGameplayTask'> {
  /**
   * Cache the pawn that we have
   */
  mCachedPawn: AFGEnemy;
}
