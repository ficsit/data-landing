import { IFGSaveInterface } from '../interfaces/IFGSaveInterface';
import { int32 } from '../native/primitive';
import { Unknown } from '../native/unknown';
import { FTimeTableStop } from '../structs/FTimeTableStop';

export interface AFGRailroadTimeTable extends Unknown<'AInfo'>, IFGSaveInterface {
  /**
   * Array of destinations this train will visit.
   */
  mStops: FTimeTableStop[];

  /**
   * Current stop the train is at or heading to.
   */
  mCurrentStop: int32;
}
