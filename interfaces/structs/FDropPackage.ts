import { UFGSchematic } from '../classes/UFGSchematic';
import { float, localized } from '../native/primitive';
import { classReference } from '../native/references';

import { FItemDrop } from './FItemDrop';

/**
 * Describes a package of items you can get in a drop.
 */
export interface FDropPackage {
  /**
   * Text showing up when finding the drop.
   */
  DropDisplayText: localized;

  /**
   * Chance in roulette selection to get the package.
   */
  DropChance: float;

  /**
   * Item contained in the package
   */
  Items: FItemDrop[];

  /**
   * We can not find this package if we haven't purchased this schematic.
   */
  RequiredSchematic: classReference<UFGSchematic>;
}
