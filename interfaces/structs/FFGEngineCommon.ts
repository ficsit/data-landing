import { UFGAtmosphereUpdater } from '../classes/UFGAtmosphereUpdater';
import { Unknown } from '../native/unknown';

export interface FFGEngineCommon {
  Engine: Unknown<'UEngine'>;

  /**
   * The worlds created through IFGWorldCreationInterface
   */
  CreatedWorlds: Unknown<'UWorld'>[];

  /**
   * Height fog properties that's controlled from camera
   */
  HeightFogUpdater: UFGAtmosphereUpdater;
}
