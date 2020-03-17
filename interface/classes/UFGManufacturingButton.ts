import { Unknown } from '../native/unknown';

export interface UFGManufacturingButton extends Unknown<'UUserWidget'> {
  /**
   * Called when a valid press on manufacture happens
   */
  OnManufacturePressed: Unknown<'FManufacturePressed'>;
}
