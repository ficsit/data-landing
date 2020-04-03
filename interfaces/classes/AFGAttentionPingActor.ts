import { AActor } from '../native/classes';

import { AFGPlayerState } from './AFGPlayerState';

export interface AFGAttentionPingActor extends AActor {
  /**
   * The player state of the pawn that spawned this actor
   */
  mOwningPlayerState: AFGPlayerState;
}
