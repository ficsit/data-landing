import { IFGDismantleInterface } from '../interfaces/IFGDismantleInterface';
import { AActor } from '../native/classes';
import { Unknown } from '../native/unknown';
import { FInventoryStack } from '../structs/FInventoryStack';

import { AFGCharacterPlayer } from './AFGCharacterPlayer';

export interface AFGStartingPod extends AActor, IFGDismantleInterface {
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
