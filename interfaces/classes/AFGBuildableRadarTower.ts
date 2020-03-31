import { float, int32 } from '../native/primitive';
import { Unknown } from '../native/unknown';

import { AFGBuildableFactory } from './AFGBuildableFactory';

export interface AFGBuildableRadarTower extends AFGBuildableFactory {
  OnRadarTowerRadiusUpdated: Unknown<'FRadarTowerRadiusUpdated'>;

  /**
   * The initial reveal radius
   */
  mMinRevealRadius: float;

  /**
   * The reveal radius when tower have fully expanded its range
   */
  mMaxRevealRadius: float;

  /**
   * Total amount of steps the radar tower have between Min Reveal Radius to Max Reveal Radius
   */
  mNumRadarExpansionSteps: int32;

  /**
   * The time between radar expansions
   */
  mRadarExpansionInterval: float;

  /**
   * The step we are on right now between 0 and mNumRadarExpansionSteps-1
   */
  mCurrentExpansionStep: int32;

  /**
   * Time left until we expand the reveal area
   */
  mTimeToNextExpansion: float;
}
