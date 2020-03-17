import { AActor } from '../native/classes';
import { float } from '../native/primitive';
import { FScannableDetails } from '../structs/FScannableDetails';

export interface AFGObjectScanner {
  /**
   * Maximum delay (in seconds) between each beep
   */
  mBeepDelayMax: float;

  /**
   * Minimum delay (in seconds) between each beep
   */
  mBeepDelayMin: float;

  /**
   * Detection range of the scanner
   */
  mDetectionRange: float;

  /**
   * "the closest" Object doesn't really need to be updated every frame. Maybe every second, or 2, or so.
   */
  mUpdateClosestObjectTime: float;

  mObjectDetails: FScannableDetails[];

  mClosestObject: AActor;

  /**
   * If true, the scanner beeps even if there is nothing within range. If false, it starts beeping if something comes within range.
   */
  mShouldBeepEvenIfNoObject: boolean;
}
