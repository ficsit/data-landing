import { AActor } from '../native/classes';
import { float } from '../native/primitive';

export interface AFGRadioactiveActor extends AActor {
  mRadioactiveDecay: float;
}
