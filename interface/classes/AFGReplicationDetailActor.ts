import { IFGReplicationDependencyActorInterface } from '../interfaces/IFGReplicationDependencyActorInterface';
import { AActor } from '../native/classes';

import { AFGBuildable } from './AFGBuildable';

export interface AFGReplicationDetailActor extends AActor, IFGReplicationDependencyActorInterface {
  /**
   * Owning AFGBuildable to this replication detail actor object. Should never be null.
   */
  mOwningBuildable: AFGBuildable;
}
