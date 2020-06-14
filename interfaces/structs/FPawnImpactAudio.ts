import { UAkAudioEvent } from '../native/assets';
import { float } from '../native/primitive';

export interface FPawnImpactAudio {
  /**
   * If we have at least this velocity (in Z) when entering the volume, we will post the specified event
   */
  MinImpactVelocity: float;

  /**
   * Event to post if the pawn has the specified velocity
   */
  ImpactEvent: UAkAudioEvent;
}
