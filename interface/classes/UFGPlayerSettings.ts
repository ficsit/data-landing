import { int32 } from '../native/primitive';
import { Unknown } from '../native/unknown';
import { FSlotData } from '../structs/FSlotData';

export interface UFGPlayerSettings extends Unknown<'UDeveloperSettings'> {
  mPlayerColors: FSlotData[];

  mDefaultPlayerInventorySlots: int32;

  mDefaultArmEquipmentSlots: int32;
}
