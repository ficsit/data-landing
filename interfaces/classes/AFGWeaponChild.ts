import { AFGEquipmentChild } from './AFGEquipmentChild';

export interface AFGWeaponChild extends AFGEquipmentChild {
  /**
   * Keeps track of whether our parent equipable is loaded
   */
  mIsLoaded: boolean;
}
