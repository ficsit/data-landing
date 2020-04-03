import { int32 } from '../native/primitive';

import { AFGBuildableGeneratorFuel } from './AFGBuildableGeneratorFuel';
import { UFGInventoryComponent } from './UFGInventoryComponent';
import { UFGReplicationDetailInventoryComponent } from './UFGReplicationDetailInventoryComponent';

export interface AFGBuildableGeneratorNuclear extends AFGBuildableGeneratorFuel {
  /**
   * Spent fuel rods goes here.
   */
  mOutputInventory: UFGInventoryComponent;

  mOutputInventoryHandler: UFGReplicationDetailInventoryComponent;

  /**
   * Waste left to produce from the current fuel rod
   */
  mWasteLeftFromCurrentFuel: int32;
}
