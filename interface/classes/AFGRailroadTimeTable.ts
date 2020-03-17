import { int32 } from '../native/primitive';
import { FTimeTableStop } from '../structs/FTimeTableStop';

export interface AFGRailroadTimeTable {
  /**
   * Array of destinations this train will visit.
   */
  mStops: FTimeTableStop[];

  /**
   * Current stop the train is at or heading to.
   */
  mCurrentStop: int32;
}
