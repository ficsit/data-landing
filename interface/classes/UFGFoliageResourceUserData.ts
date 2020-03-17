import { int32 } from '../native/primitive';
import { classReference } from '../native/references';
import { Unknown } from '../native/unknown';
import { FItemDropWithChance } from '../structs/FItemDropWithChance';

import { UFGFoliageIdentifier } from './UFGFoliageIdentifier';

export interface UFGFoliageResourceUserData extends Unknown<'UAssetUserData'> {
  /**
   * Items we should gain when picking up the item, @todo: Remove BlueprintReadOnly
   */
  mPickupItems: FItemDropWithChance[];

  /**
   * Audio event to be posted when picked up, @todo: Remove BlueprintReadOnly
   */
  mPickupEvent: Unknown<'UAkAudioEvent'>;

  /**
   * The effect to play where the pickup was, @todo: Remove BlueprintReadOnly
   */
  mPickupEffect: Unknown<'UParticleSystem'>;

  /**
   * Audio event to be posted when run over by a vehicle, @todo: Remove BlueprintReadOnly
   */
  mVehicleDestroyedEvent: Unknown<'UAkAudioEvent'>;

  /**
   * The effect to play when run over by a vehicle, @todo: Remove BlueprintReadOnly
   */
  mVehicleDestroyedEffect: Unknown<'UParticleSystem'>;

  /**
   * The effect to play when destroyed by an explosive. If one is not specified it may fall back to either the vehicle effect or pickup effect
   */
  mExplosionDestroyedEffect: Unknown<'UParticleSystem'>;

  /**
   * Specifies priority for spawning against other effects. Must be implemented by the spawning class. ex: FGDestructiveProjectile
   */
  mFXPriority: int32;

  /**
   * What does this foliage identify itself as
   */
  mFoliageIdentifiers: classReference<UFGFoliageIdentifier>[];
}
