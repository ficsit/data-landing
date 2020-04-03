import { AActor } from '../native/classes';
import { classReference } from '../native/references';
import { Unknown } from '../native/unknown';

export interface FDebrisActor {
  /**
   * Mesh to spawn.
   */
  ActorClass: classReference<AActor>;

  /**
   * How many to spawn, note that the upper limit is guaranteed while the lower limit is not.
   */
  Num: Unknown<'FInt32Interval'>;
}
