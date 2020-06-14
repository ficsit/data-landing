import { UAkAudioEvent } from '../native/assets';
import { float, int32 } from '../native/primitive';
import { classReference } from '../native/references';

import { AFGEquipment } from './AFGEquipment';
import { AFGHUD } from './AFGHUD';
import { UFGDamageType } from './UFGDamageType';
import { UFGItemDescriptor } from './UFGItemDescriptor';

export interface AFGWeapon extends AFGEquipment {
  /**
   * [DavalliusA:Wed/20-03-2019] the base hud object will never get invalid during use, so we can use anormal pointer here to access it.
   */
  mAssosiatedHud: AFGHUD;

  /**
   * How much ammo does a magazine cover
   */
  mMagSize: int32;

  /**
   * How much ammo is loaded into the weapon
   */
  mCurrentAmmo: int32;

  /**
   * The item we shoot
   */
  mAmmunitionClass: classReference<UFGItemDescriptor>;

  /**
   * Damage type to use when hitting others
   */
  mDamageTypeClass: classReference<UFGDamageType>;

  /**
   * In seconds, how long time does it take to reload the weapon
   */
  mReloadTime: float;

  /**
   * How many seconds between between shots
   */
  mFireRate: float;

  /**
   * Are we firing?
   */
  mIsFiring: boolean;

  /**
   * The player wants to shoot
   */
  mIsPendingFire: boolean;

  /**
   * True if we are currently reloading
   */
  mIsReloading: boolean;

  /**
   * Sound played when reloading
   */
  mReloadSound: UAkAudioEvent;
}
