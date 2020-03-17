import { UObject } from '../native/classes';
import { float } from '../native/primitive';
import { Unknown } from '../native/unknown';

export interface UFGMusicManager extends UObject {
  /**
   * How often (in seconds) we want to check if we are close to a factory
   */
  mUpdateInterval: float;

  /**
   * The distance that we considers a factory as close
   */
  mFactoryCloseDistance: float;

  /**
   * Object we post event on, set RTPC on etc.
   */
  mAkObject: Unknown<'UAkObject'>;

  /**
   * Music manager class name
   */
  mMusicManagerClassName: Unknown<'FSoftClassPath'>;
}
