import { UObject } from '../native/classes';
import { Unknown } from '../native/unknown';

export interface UFGAtmosphereUpdater extends UObject {
  /**
   * The worlds we want to affect
   */
  mActiveWorlds: Unknown<'UWorld'>[];
}
