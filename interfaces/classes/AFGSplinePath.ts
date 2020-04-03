import { AActor } from '../native/classes';
import { Unknown } from '../native/unknown';

export interface AFGSplinePath extends AActor {
  mSpline: Unknown<'USplineComponent'>;
}
