import { float } from '../native/primitive';
import { Rotator } from '../native/structs';
import { Unknown } from '../native/unknown';

import { AFGDestructiveProjectile } from './AFGDestructiveProjectile';

export interface AFGNobeliskExplosive extends AFGDestructiveProjectile {
  mRotatingMovementComp: Unknown<'URotatingMovementComponent'>;

  /**
   * Tells client to mark this to explode after a certain time
   */
  mDetonateIn: float;

  mEnvironmentDestructionSphere: Unknown<'USphereComponent'>;

  mThrowRotation: Rotator;
}
