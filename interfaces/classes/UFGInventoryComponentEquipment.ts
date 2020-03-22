import { EEquipmentSlot } from '../enums/EEquipmentSlot';
import { int32 } from '../native/primitive';

import { AFGEquipment } from './AFGEquipment';
import { UFGInventoryComponent } from './UFGInventoryComponent';

export interface UFGInventoryComponentEquipment extends UFGInventoryComponent {
  mOverrideEquipmentInSlot: AFGEquipment;

  /**
   * This is the actual equipment in the slot
   */
  mEquipmentInSlot: AFGEquipment;

  /**
   * This inventory will only accept equipments that are supposed to be on this slot
   */
  mEquipmentInventorySlot: EEquipmentSlot;

  /**
   * Index of the active equipment
   */
  mActiveEquipmentIndex: int32;
}
