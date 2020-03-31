import { int32 } from '../native/primitive';
import { classReference } from '../native/references';
import { FItemAmount } from '../structs/FItemAmount';

import { UFGSchematic } from './UFGSchematic';
import { UFGSettings } from './UFGSettings';

export interface UFGHardDriveSettings extends UFGSettings {
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
