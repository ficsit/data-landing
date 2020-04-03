import { Unknown } from '../native/unknown';

import { AFGBuildableHologram } from './AFGBuildableHologram';
import { AFGFactoryHologram } from './AFGFactoryHologram';

export interface AFGTradingPostHologram extends AFGFactoryHologram {
  /**
   * The generator holograms
   */
  mGeneratorHolograms: AFGFactoryHologram;

  /**
   * The storage hologram
   */
  mStorageHologram: AFGBuildableHologram;

  /**
   * The hub terminal holograms
   */
  mHubTerminalHologram: AFGBuildableHologram;

  /**
   * The work bench holograms
   */
  mWorkBenchHologram: AFGBuildableHologram;

  /**
   * Array of components matching the location where generators are placed
   */
  mGeneratorLocations: Unknown<'USceneComponent'>[];

  /**
   * component matching the location where the storage is placed
   */
  mStorageLocation: Unknown<'USceneComponent'>;

  /**
   * component matching the location where the hub terminal is placed
   */
  mHubTerminalLocation: Unknown<'USceneComponent'>;

  /**
   * component matching the location where the work bench is placed
   */
  mWorkBenchLocation: Unknown<'USceneComponent'>;
}
