import { float } from '../native/primitive';
import { Unknown } from '../native/unknown';

export interface FPawnImpactAudio {
  /**
   * If we have at least this velocity (in Z) when entering the volume, we will post the specified event
   */
  MinImpactVelocity: float;

  /**
   * Event to post if the pawn has the specified velocity
   */
  ImpactEvent: Unknown<'UAkAudioEvent'>;
}
