import { float } from '../native/primitive';
import { Unknown } from '../native/unknown';

export interface AFGNobeliskExplosive {
  mRotatingMovementComp: Unknown<'URotatingMovementComponent'>;

  /**
   * Tells client to mark this to explode after a certain time
   */
  mDetonateIn: float;

  mEnvironmentDestructionSphere: Unknown<'USphereComponent'>;

  mThrowRotation: Unknown<'FRotator'>;
}
