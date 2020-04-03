import { UObject } from '../native/classes';
import { FPawnImpactAudio } from '../structs/FPawnImpactAudio';

export interface UFGWaterAudio extends UObject {
  /**
   * Audio effects to play whenever a pawn hits the water surface with a specified velocity
   */
  mImpactAudioMap: FPawnImpactAudio[];
}
