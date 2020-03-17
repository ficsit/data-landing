import { Unknown } from '../native/unknown';

export interface AFGItemPickup_Spawnable {
  /**
   * The mesh to represent the item
   */
  mMeshComponent: Unknown<'UStaticMeshComponent'>;

  /**
   * Should we play a spawn effect?
   */
  mPlaySpawnEffect: boolean;
}
