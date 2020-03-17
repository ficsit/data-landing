import { int32 } from '../native/primitive';
import { Unknown } from '../native/unknown';
import { FMapAreaParticleCollection } from '../structs/FMapAreaParticleCollection';

import { AFGPlayerController } from './AFGPlayerController';

export interface AFGProximitySubsystem {
  mOwningController: AFGPlayerController;

  mRootComponent: Unknown<'USceneComponent'>;

  /**
   * Contains mappings of particle system that should play when entering a given map area
   */
  mMapAreaParticleCollection: FMapAreaParticleCollection[];

  /**
   * Pool of decals
   */
  mPooledDecals: Unknown<'UDecalComponent'>[];

  /**
   * How many decals we want to show
   */
  mMaxNumDecals: int32;
}
