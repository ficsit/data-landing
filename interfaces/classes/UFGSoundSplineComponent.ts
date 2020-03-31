import { float } from '../native/primitive';
import { Unknown } from '../native/unknown';

export interface UFGSoundSplineComponent extends Unknown<'UAkComponent'> {
  /**
   * Distance beween each emitter on our parent spline, this might be scaled slightly so that we get a point on both start and end
   */
  mEmitterInterval: float;
}
