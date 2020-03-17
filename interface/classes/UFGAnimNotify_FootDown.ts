import { int32 } from '../native/primitive';

export interface UFGAnimNotify_FootDown {
  /**
   * Foot
   */
  mFootIndex: int32;

  /**
   * Should play a sound.
   */
  mPlaySound: boolean;
}
