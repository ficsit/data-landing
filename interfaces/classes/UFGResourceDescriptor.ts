import { UStaticMesh, UTexture2D } from '../native/assets';
import { float } from '../native/primitive';
import { LinearColor } from '../native/structs';
import { Unknown } from '../native/unknown';

import { UFGItemDescriptor } from './UFGItemDescriptor';

export interface UFGResourceDescriptor extends UFGItemDescriptor {
  /**
   * The static mesh we want the Resource Deposit to use when it has this class selected
   */
  mDepositMesh: UStaticMesh;

  /**
   * The material this resource deposit use (if any)
   */
  mDepositMaterial: Unknown<'UMaterialInstance'>;

  /**
   * The decal this resource use (if any)
   */
  mDecalMaterial: Unknown<'UMaterial'>;

  /**
   * How big will the decal on the ground be (and the collision for it) if we have mUseMaterialDecal enabled
   */
  mDecalSize: float;

  /**
   * The color the ping should have for this material
   */
  mPingColor: LinearColor;

  /**
   * A multiplier for this resource to set if it is fast or slow to pick up. 1.0 = normal
   */
  mCollectSpeedMultiplier: float;

  /**
   * Texture to show in the compass when this resource has been scanned and found.
   */
  mCompassTexture: UTexture2D;

  /**
   * Particle to show when mining by hand
   */
  mManualMiningParticle: Unknown<'UParticleSystem'>;

  /**
   * Particle to show when mining with machine
   */
  mFactoryMiningParticle: Unknown<'UParticleSystem'>;

  /**
   * Particle to show when mining with machine
   */
  mDestroyedParticle: Unknown<'UParticleSystem'>;

  /**
   * name of sound to play when mining by hand
   */
  mManualMiningAudioName: string;
}
