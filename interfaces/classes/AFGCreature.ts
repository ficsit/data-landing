import { EEnabled } from '../enums/EEnabled';
import { float } from '../native/primitive';
import { classReference } from '../native/references';
import { Unknown } from '../native/unknown';
import { FMoveSpeedPair } from '../structs/FMoveSpeedPair';

import { AFGCharacterBase } from './AFGCharacterBase';
import { AFGCreatureSpawner } from './AFGCreatureSpawner';
import { AFGItemPickup } from './AFGItemPickup';
import { AFGSplinePath } from './AFGSplinePath';

export interface AFGCreature extends AFGCharacterBase {
  /**
   * How big navmesh do we want to generate
   */
  mNavigationGenerationRadius: float;

  /**
   * Navigation outside this radius will be removed
   */
  mNavigationRemovalRadius: float;

  /**
   * Materials that may be used on arachnids
   */
  mArachnophobiaModeMaterials: Unknown<'UMaterialInstance'>[];

  /**
   * Is creature considered an arachnid
   */
  mIsArachnid: boolean;

  /**
   * True if optimized by the AI system
   */
  mIsEnabled: EEnabled;

  /**
   * Class of item to drop when dead
   */
  mItemToDrop: classReference<AFGItemPickup>;

  /**
   * Spline we are set to follow
   */
  mSpline: AFGSplinePath;

  /**
   * Called when we are done with rotation movement
   */
  mRotationDoneDelegate: Unknown<'FRotationDoneDelegate'>;

  /**
   * Array with information about different speeds that this creature can use
   */
  mMoveSpeedData: FMoveSpeedPair[];

  /**
   * Indicates if we should optimize this creatures mesh ( disable ticking ) when looking at it from a distance ( not good on large creatures )
   */
  mShouldOptimizeMeshWhenVisible: boolean;

  /**
   * Should this creature be able to persist in the world
   */
  mIsPersistent: boolean;

  /**
   * We specify our own controller class because we need to delay the spawning. Set this instead of "AIControllerClass
   */
  mActualAIControllerClass: classReference<Unknown<'AController'>>;

  /**
   * Timer handle used when rotating the pawn with our custom rotate movement
   */
  mRotationTimerHandle: Unknown<'FTimerHandle'>;

  /**
   * Target rotation for custom rotate movement
   */
  mTargetRotation: Unknown<'FRotator'>;

  /**
   * Can creatures spawn during day?
   */
  mCanSpawnDuringDay: boolean;

  /**
   * Can creatures spawn during night?
   */
  mCanSpawnDuringNight: boolean;

  /**
   * Used in combination with BTT_RotateToTarget if we need the creature to move while rotating
   */
  mMoveDuringRotation: boolean;

  /**
   * Scale value for input vector when rotating and moving
   */
  mRotationSpeedMultiplier: float;

  /**
   * Component used to determine eye location for a creature
   */
  mEyeLocationComponent: Unknown<'USceneComponent'>;

  /**
   * Sprite for the arachnophobia mode
   */
  mArachnophobia_Sprite: Unknown<'UBillboardComponent'>;

  /**
   * Material for the arachnophobia mode
   */
  mArachnophobia_Material: Unknown<'UMaterialBillboardComponent'>;

  /**
   * Particle for the arachnophobia mode
   */
  mArachnophobia_Particle: Unknown<'UParticleSystemComponent'>;

  /**
   * How much of day time percentage ( 0.0 - 1.0 ) should count towards night time
   */
  mDayTimePctCountAsNight: float;

  /**
   * Reference to the spawner that handles this creature
   */
  mOwningSpawner: AFGCreatureSpawner;
}
