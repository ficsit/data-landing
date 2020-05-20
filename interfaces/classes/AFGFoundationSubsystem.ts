import { int32 } from '../native/primitive';
import { Unknown } from '../native/unknown';
import { FBuilding } from '../structs/FBuilding';

import { AFGSubsystem } from './AFGSubsystem';

export interface AFGFoundationSubsystem extends AFGSubsystem, Unknown<'IFGSaveInterface'> {
  /**
   * All the buildings in the game, map with foundation ID and the building struct.
   */
  mBuildings: Map<int32, FBuilding>;
}
