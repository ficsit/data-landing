import { FItemAmount } from './FItemAmount';

/**
 * Holds info about a schematic cost.
 */
export interface FMultipleItemStruct {
  /**
   * Cost of schematic if there are more than once item in this array the true cost will be randomly selected.
   */
  ItemCost: FItemAmount[];
}
