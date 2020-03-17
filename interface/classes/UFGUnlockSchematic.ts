import { classReference } from '../native/references';

import { UFGSchematic } from './UFGSchematic';

export interface UFGUnlockSchematic {
  /**
   * The schematics you get from this unlock
   */
  mSchematics: classReference<UFGSchematic>[];
}
