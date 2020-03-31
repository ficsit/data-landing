import { Unknown } from '../native/unknown';

import { AFGItemPickup } from './AFGItemPickup';

export interface AFGItemPickup_Spawnable extends AFGItemPickup {
  /**
   * The mesh to represent the item
   */
  mMeshComponent: Unknown<'UStaticMeshComponent'>;

  /**
   * Should we play a spawn effect?
   */
  mPlaySpawnEffect: boolean;
}
