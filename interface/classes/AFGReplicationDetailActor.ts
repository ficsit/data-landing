import { AFGBuildable } from './AFGBuildable';

export interface AFGReplicationDetailActor {
  /**
   * Owning AFGBuildable to this replication detail actor object. Should never be null.
   */
  mOwningBuildable: AFGBuildable;
}
