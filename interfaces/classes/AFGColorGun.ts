import { UTexture2D } from '../native/assets';
import { AActor } from '../native/classes';
import { uint8 } from '../native/primitive';
import { LinearColor } from '../native/structs';

import { AFGWeaponInstantFire } from './AFGWeaponInstantFire';

export interface AFGColorGun extends AFGWeaponInstantFire {
  /**
   * [DEPRECATED] This will be the color used when shooting
   */
  mPrimaryColor_DEPRECATED: LinearColor;

  /**
   * [DEPRECATED] This will be the color used when shooting
   */
  mSecondaryColor_DEPRECATED: LinearColor;

  /**
   * crosshair color used when aiming at a target that already have the same color slot as you are painting
   */
  mRedundantTargetCrosshairColor: LinearColor;

  /**
   * crosshair texture used when aiming at a target that already have the same color slot as you are painting
   */
  mRedundantTargetCrosshairTexture: UTexture2D;

  /**
   * crosshair color used when aiming at a target too far away or not aiming at a target at all
   */
  mNoTargetCrosshairColor: LinearColor;

  /**
   * crosshair texture used when aiming at a target too far away or not aiming at a target at all
   */
  mNoTargetCrosshairTexture: UTexture2D;

  /**
   * crosshair color used when aiming at a target that can't be colored
   */
  mNonColorableTargetCrosshairColor: LinearColor;

  /**
   * crosshair texture used when aiming at a target that can't be colored
   */
  mNonColorableTargetCrosshairTexture: UTexture2D;

  /**
   * crosshair texture used when aiming at a target isvalid
   */
  mValidTargetCrosshairTexture: UTexture2D;

  /**
   * This will be the color slot used when shooting
   * [DavalliusA:Fri/01-03-2019] don't use the first color as default, as it will make players maybe not notice when thye fire on a building already using the default color
   */
  mColorSlot: uint8;

  mCurrentColorTarget: AActor;
}
