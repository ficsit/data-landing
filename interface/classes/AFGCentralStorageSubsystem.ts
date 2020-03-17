import { Unknown } from '../native/unknown';

import { AFGCentralStorageContainer } from './AFGCentralStorageContainer';
import { AFGSubsystem } from './AFGSubsystem';

export interface AFGCentralStorageSubsystem extends AFGSubsystem {
  /**
   * Called when a central storage has been removed
   */
  CentralStorageAddedOrRemoved: Unknown<'FCentralStorageAddedOrRemovedDelegate'>;

  /**
   * All the central storages built.
   */
  mCentralStorages: AFGCentralStorageContainer[];
}
