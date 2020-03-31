import { UStaticMesh } from '../native/assets';
import { Unknown } from '../native/unknown';

export interface FDebrisMesh {
  /**
   * Mesh to spawn.
   */
  Mesh: UStaticMesh;

  /**
   * How many to spawn, note that the upper limit is guaranteed while the lower limit is not.
   */
  Num: Unknown<'FInt32Interval'>;
}
