import { Unknown } from '../native/unknown';

export interface UFGAtmosphereUpdater {
  /**
   * The worlds we want to affect
   */
  mActiveWorlds: Unknown<'UWorld'>[];
}
