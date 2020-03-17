import { classReference } from '../native/references';

import { UFGSchematic } from './UFGSchematic';
import { UFGUnlock } from './UFGUnlock';

export interface UFGUnlockSchematic extends UFGUnlock {
  /**
   * The schematics you get from this unlock
   */
  mSchematics: classReference<UFGSchematic>[];
}
