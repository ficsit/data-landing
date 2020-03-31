import { AActor } from '../native/classes';
import { float } from '../native/primitive';

export interface AFGProfileSpline extends AActor {
  /**
   * Runtime length of the spline in minutes.
   */
  Duration: float;
}
