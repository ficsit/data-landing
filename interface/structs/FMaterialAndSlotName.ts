import { Unknown } from '../native/unknown';

export interface FMaterialAndSlotName {
  /**
   * This is the slot name on the character
   */
  SlotName: string;

  /**
   * The material to put on that slot name
   */
  Material: Unknown<'UMaterialInterface'>;
}
