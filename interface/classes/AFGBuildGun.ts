import { EBuildGunState } from '../enums/EBuildGunState';
import { float } from '../native/primitive';
import { classReference } from '../native/references';
import { Unknown } from '../native/unknown';

import { UFGBuildGunState } from './UFGBuildGunState';
import { UFGBuildGunStateBuild } from './UFGBuildGunStateBuild';
import { UFGBuildGunStateDismantle } from './UFGBuildGunStateDismantle';

export interface AFGBuildGun {
  /**
   * Called when the build gun state changes.
   */
  mOnStateChanged: Unknown<'FOnBuildGunStateChanged'>;

  /**
   * Called when the build gun build state receives a new recipe. This May be called prior to OnStateChanged.
   */
  mOnRecipeChanged: Unknown<'FOnBuildGunRecipeChanged'>;

  /**
   * Trace distance for this build gun when building and dismantling.
   */
  mBuildDistanceMax: float;

  /**
   * The state to use when operating the menus.
   */
  mMenuStateClass: classReference<UFGBuildGunState>;

  /**
   * The state to use when building.
   */
  mBuildStateClass: classReference<UFGBuildGunStateBuild>;

  /**
   * The state to use when dismantling.
   */
  mDismantleStateClass: classReference<UFGBuildGunStateDismantle>;

  /**
   * All the states.
   */
  mStates: UFGBuildGunState;

  /**
   * Result of the latest trace.
   */
  mHitResult: Unknown<'FHitResult'>;

  mCurrentStateEnum: EBuildGunState;

  /**
   * @see mCurrentStateIndex.
   */
  mCurrentState: UFGBuildGunState;
}
