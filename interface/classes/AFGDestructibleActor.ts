import { Unknown } from '../native/unknown';

export interface AFGDestructibleActor {
  /**
   * The mesh that should be rendered before we start going destructible. Used for optimization as it has less triangles
   */
  mStaticMeshProxy: Unknown<'UStaticMeshComponent'>;

  /**
   * So we can save if this has been fractured
   */
  mHasBeenFractured: boolean;
}
