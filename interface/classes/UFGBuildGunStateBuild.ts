import { AActor } from '../native/classes';
import { float } from '../native/primitive';
import { classReference } from '../native/references';
import { Unknown } from '../native/unknown';
import { FFactoryClearanceData } from '../structs/FFactoryClearanceData';

import { AFGHologram } from './AFGHologram';
import { UFGRecipe } from './UFGRecipe';

export interface UFGBuildGunStateBuild {
  OnSplineModeChangedDelegate: Unknown<'FSplineModeChangedDelegate'>;

  /**
   * Time needed to hold down the key to show the selection UI
   */
  mSplineModeSelectHoldDownDurationForUI: float;

  /**
   * True if we are waiting for the selection UI
   */
  mIsWaitingForSelectionUI: boolean;

  /**
   * user setting for if we are using the release and press mode or not for advancing build steps. Nett to be in sync on client and ser ver players preferences
   */
  mIsUsingPressAndReleaseAsBuildSteps: boolean;

  /**
   * Recipe to activate when state is entered.
   */
  mPendingRecipe: classReference<UFGRecipe>;

  mActiveRecipe: classReference<UFGRecipe>;

  /**
   * The hologram to build.
   */
  mHologram: AFGHologram;

  /**
   * The actor to replace (dismantle) when upgrading.
   */
  mUpgradedActor: AActor;

  /**
   * Contains all the proximate clearances volumes
   */
  mProximateClearances: FFactoryClearanceData[];

  /**
   * overlaps so the state does not contain this easily self contained logic.
   */
  mClearanceDetector: Unknown<'UBoxComponent'>;
}
