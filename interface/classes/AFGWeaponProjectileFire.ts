import { FProjectileData } from '../structs/FProjectileData';

import { AFGWeapon } from './AFGWeapon';

export interface AFGWeaponProjectileFire extends AFGWeapon {
  /**
   * weapon config
   */
  mProjectileData: FProjectileData;
}
