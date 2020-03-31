import { UFGSchematic } from '../classes/UFGSchematic';
import { classReference } from '../native/references';

import { FItemAmount } from './FItemAmount';

/**
 * Holds info about a schematic and How much has been paid of on it.
 */
export interface FSchematicCost {
  Schematic: classReference<UFGSchematic>;

  /**
   * Amount paid off
   */
  ItemCost: FItemAmount[];
}
