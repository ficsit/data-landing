import { uint8 } from '../native/primitive';

export interface FQuantizedReservoirIndicatorData {
  /**
   * See setters for how this data is packed.
   */
  PackedFlowFill: uint8;

  PackedFlowDrain: uint8;

  PackedContent: uint8;
}
