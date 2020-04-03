import { float } from '../native/primitive';

import { FItemDrop } from './FItemDrop';

export interface FItemDropWithChance {
  /**
   * A chance between 0->1, 1 means 100% drop chance
   */
  DropChance: float;

  /**
   * The drop to be given if we gain the item
   */
  Drop: FItemDrop;
}
