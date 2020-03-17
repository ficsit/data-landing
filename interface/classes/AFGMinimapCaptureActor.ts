import { float, int32 } from '../native/primitive';

import { UFGMapAreaTexture } from './UFGMapAreaTexture';

export interface AFGMinimapCaptureActor {
  /**
   * Do we want the foliage to be considered for the height data generation?
   */
  mIncludeFoliage: boolean;

  /**
   * Should we ignore the userdata set on static meshes, all static meshes will be considered for the height data
   */
  mIgnoreUserData: boolean;

  /**
   * Divides the terrain height map into the given amount of layers
   */
  mLayersForTerrain: int32;

  /**
   * Show depth on the water map
   */
  mShowDepthOnWaterMap: boolean;

  /**
   * The max water depth considered, everything deeper than this will be clamped to this value
   */
  mWaterMaxDepth: float;

  /**
   * Decides how big the buffer between "no water"-areas and the deepest water-area is
   */
  mWaterDepthBufferMultiplier: float;

  mHeightDataResolution: int32;

  /**
   * The areas defined as by this texture
   */
  mMapAreaTexture: UFGMapAreaTexture;
}
