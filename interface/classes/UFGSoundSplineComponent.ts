import { float } from '../native/primitive';

export interface UFGSoundSplineComponent {
  /**
   * Distance beween each emitter on our parent spline, this might be scaled slightly so that we get a point on both start and end
   */
  mEmitterInterval: float;
}
