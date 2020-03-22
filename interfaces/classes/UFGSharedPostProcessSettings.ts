import { UObject } from '../native/classes';
import { float } from '../native/primitive';
import { Unknown } from '../native/unknown';

export interface UFGSharedPostProcessSettings extends UObject {
  /**
   * Normal settings for post process
   */
  mPostProcessSettings: Unknown<'FPostProcessSettings'>;

  /**
   * At what distance do we want to blend in the post process settings for the water
   */
  mBlendRadius: float;

  /**
   * How much do we want to blend in the post process effect
   */
  mBlendWeight: float;

  /**
   * Priority of the post process effect
   */
  mPriority: float;
}
