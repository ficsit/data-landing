import { int8, uint8 } from '../native/primitive';

export interface FQuantizedPipelineIndicatorData {
  /**
   * See setters for how this data is packed.
   */
  PackedFlow: int8;

  PackedContent: uint8;
}
