import { int32 } from '../native/primitive';
import { FSlotData } from '../structs/FSlotData';

export interface UFGPlayerSettings {
  mPlayerColors: FSlotData[];

  mDefaultPlayerInventorySlots: int32;

  mDefaultArmEquipmentSlots: int32;
}
