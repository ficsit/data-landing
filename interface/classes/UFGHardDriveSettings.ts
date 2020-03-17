import { int32 } from '../native/primitive';
import { classReference } from '../native/references';
import { FItemAmount } from '../structs/FItemAmount';

import { UFGSchematic } from './UFGSchematic';

export interface UFGHardDriveSettings {
  mUniqueItemCount: int32;

  /**
   * Fallback for returning hard drive if no research was available
   */
  mFallbackReturnItem: FItemAmount;

  /**
   * The schematic which is used to research hard drives
   */
  mHardDriveResearchSchematic: classReference<UFGSchematic>;
}
