import { int32 } from '../native/primitive';
import { FBuilding } from '../structs/FBuilding';

export interface AFGFoundationSubsystem {
  /**
   * All the buildings in the game, map with foundation ID and the building struct.
   */
  mBuildings: Record<int32, FBuilding>;
}
