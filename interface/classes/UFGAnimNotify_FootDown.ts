import { int32 } from '../native/primitive';
import { Unknown } from '../native/unknown';

export interface UFGAnimNotify_FootDown extends Unknown<'UAnimNotify'> {
  /**
   * Foot
   */
  mFootIndex: int32;

  /**
   * Should play a sound.
   */
  mPlaySound: boolean;
}
