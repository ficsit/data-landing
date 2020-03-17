import { AActor } from '../native/classes';
import { float } from '../native/primitive';

export interface AFGPlanet extends AActor {
  /**
   * How the sunlight changes during the day
   */
  mPreviewTime: float;
}
