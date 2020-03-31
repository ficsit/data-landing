import { int32 } from '../native/primitive';

import { AFGBuildableManufacturer } from './AFGBuildableManufacturer';

export interface AFGBuildableAutomatedWorkBench extends AFGBuildableManufacturer {
  /**
   * Size of the input inventory for the workbench
   */
  mInputInventorySize: int32;
}
