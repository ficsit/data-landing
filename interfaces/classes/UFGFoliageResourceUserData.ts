import { UAkAudioEvent, UParticleSystem } from '../native/assets';
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
  mPickupEvent: UAkAudioEvent;

  /**
   * The effect to play where the pickup was, @todo: Remove BlueprintReadOnly
   */
  mPickupEffect: UParticleSystem;

  /**
   * Audio event to be posted when run over by a vehicle, @todo: Remove BlueprintReadOnly
   */
  mVehicleDestroyedEvent: UAkAudioEvent;

  /**
   * The effect to play when run over by a vehicle, @todo: Remove BlueprintReadOnly
   */
  mVehicleDestroyedEffect: UParticleSystem;

  /**
   * The effect to play when destroyed by an explosive. If one is not specified it may fall back to either the vehicle effect or pickup effect
   */
  mExplosionDestroyedEffect: UParticleSystem;

  /**
   * Specifies priority for spawning against other effects. Must be implemented by the spawning class. ex: FGDestructiveProjectile
   */
  mFXPriority: int32;

  /**
   * What does this foliage identify itself as
   */
  mFoliageIdentifiers: classReference<UFGFoliageIdentifier>[];
}
