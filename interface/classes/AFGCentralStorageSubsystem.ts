import { Unknown } from '../native/unknown';

import { AFGCentralStorageContainer } from './AFGCentralStorageContainer';

export interface AFGCentralStorageSubsystem {
  /**
   * Called when a central storage has been removed
   */
  CentralStorageAddedOrRemoved: Unknown<'FCentralStorageAddedOrRemovedDelegate'>;

  /**
   * All the central storages built.
   */
  mCentralStorages: AFGCentralStorageContainer[];
}
