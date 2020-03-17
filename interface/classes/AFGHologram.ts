import { AActor } from '../native/classes';
import { int32 } from '../native/primitive';
import { classReference } from '../native/references';
import { Vector } from '../native/structs';
import { Unknown } from '../native/unknown';

import { AFGHologram } from './AFGHologram';
import { UFGRecipe } from './UFGRecipe';

export interface AFGHologram {
  mValidHitClasses: classReference<AActor>[];

  /**
   * The recipe for this hologram.
   */
  mRecipe: classReference<UFGRecipe>;

  /**
   * Looping sound to play on holograms
   */
  mLoopSound: Unknown<'UAkComponent'>;

  /**
   * Clearance detector box. Used to detect nearby clearances an display them during the build steps
   */
  mClearanceDetector: Unknown<'UBoxComponent'>;

  /**
   * Can we construct the building, updated by SetCanConstruct from the build gun.
   */
  mPlacementMaterial: boolean;

  /**
   * Material on hologram for valid placement.
   */
  mValidPlacementMaterial: Unknown<'UMaterialInstance'>;

  /**
   * Material on hologram for invalid placement.
   */
  mInvalidPlacementMaterial: Unknown<'UMaterialInstance'>;

  mChildren: AFGHologram[];

  /**
   * The class for the build actor this hologram wants to construct. Set on spawn.
   */
  mBuildClass: classReference<AActor>;

  mUseBuildClearanceOverlapSnapp: boolean;

  /**
   * Who is building
   */
  mConstructionInstigator: Unknown<'APawn'>;

  /**
   * If this hologram is disabled and should not be visible or constructed.
   */
  mIsDisabled: boolean;

  /**
   * If the hologram has changed, i.e. multi step placement or rotation.
   */
  mIsChanged: boolean;

  /**
   * The client needs to know the initial saved scroll mode value from the BuildGun.
   */
  mInitialScrollModeValue: int32;

  /**
   * Temp memory holders for when holograms are serialized for construction messages (replication)
   */
  mConstructionPosition: Vector;

  /**
   * Temp memory holders for when holograms are serialized for construction messages (replication)
   */
  mConstructionRotation: Unknown<'FRotator'>;
}
