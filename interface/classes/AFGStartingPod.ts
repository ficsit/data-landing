import { Unknown } from '../native/unknown';
import { FInventoryStack } from '../structs/FInventoryStack';

import { AFGCharacterPlayer } from './AFGCharacterPlayer';

export interface AFGStartingPod {
  /**
   * Player associated with this pod
   */
  mCachedPlayer: AFGCharacterPlayer;

  /**
   * Array containing how much to get back when dismantling this bad boy
   */
  mDismantleStacks: FInventoryStack[];

  /**
   * Main mesh
   */
  mDropPodMesh: Unknown<'USkeletalMeshComponent'>;
}
