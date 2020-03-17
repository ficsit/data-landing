import { AFGPlayerState } from './AFGPlayerState';

export interface AFGAttentionPingActor {
  /**
   * The player state of the pawn that spawned this actor
   */
  mOwningPlayerState: AFGPlayerState;
}
