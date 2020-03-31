import { AFGTrainStationIdentifier } from '../classes/AFGTrainStationIdentifier';
import { float } from '../native/primitive';

export interface FTimeTableStop {
  /**
   * Where to stop.
   */
  Station: AFGTrainStationIdentifier;

  /**
   * Time to stay.
   */
  Duration: float;
}
