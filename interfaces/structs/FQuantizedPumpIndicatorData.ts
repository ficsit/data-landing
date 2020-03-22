import { int8, uint8 } from '../native/primitive';

export interface FQuantizedPumpIndicatorData {
  /**
   * See setters for how this data is packed.
   */
  PackedFlow: int8;

  PackedPressure: uint8;
}
