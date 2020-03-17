import { Unknown } from '../native/unknown';

export interface UFGManufacturingButton {
  /**
   * Called when a valid press on manufacture happens
   */
  OnManufacturePressed: Unknown<'FManufacturePressed'>;
}
