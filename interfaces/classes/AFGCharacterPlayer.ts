import { ECameraMode } from '../enums/ECameraMode';
import { EResourceForm } from '../enums/EResourceForm';
import { IFGAggroTargetInterface } from '../interfaces/IFGAggroTargetInterface';
import { IFGRadiationInterface } from '../interfaces/IFGRadiationInterface';
import { IFGUseableInterface } from '../interfaces/IFGUseableInterface';
import { AActor } from '../native/classes';
import { float, int32, int8 } from '../native/primitive';
import { classReference } from '../native/references';
import { Vector } from '../native/structs';
import { Unknown } from '../native/unknown';
import { FFootstepEffect } from '../structs/FFootstepEffect';
import { FFootstepEffectSurface } from '../structs/FFootstepEffectSurface';
import { FItemAmount } from '../structs/FItemAmount';
import { FUseState } from '../structs/FUseState';

import { AFGBuildGun } from './AFGBuildGun';
import { AFGCharacterBase } from './AFGCharacterBase';
import { AFGDriveablePawn } from './AFGDriveablePawn';
import { AFGEquipment } from './AFGEquipment';
import { AFGEquipmentAttachment } from './AFGEquipmentAttachment';
import { AFGFoliagePickup } from './AFGFoliagePickup';
import { AFGItemPickup } from './AFGItemPickup';
import { AFGResourceMiner } from './AFGResourceMiner';
import { AFGResourceScanner } from './AFGResourceScanner';
import { UFGDamageType } from './UFGDamageType';
import { UFGInventoryComponent } from './UFGInventoryComponent';
import { UFGInventoryComponentBeltSlot } from './UFGInventoryComponentBeltSlot';
import { UFGOutlineComponent } from './UFGOutlineComponent';

export interface AFGCharacterPlayer
  extends AFGCharacterBase,
    IFGAggroTargetInterface,
    IFGUseableInterface,
    IFGRadiationInterface {
  /**
   * Base turn rate, in deg/sec. Other scaling may affect final turn rate.
   */
  mBaseTurnRate: float;

  /**
   * Base look up/down rate, in deg/sec. Other scaling may affect final rate.
   */
  mBaseLookUpRate: float;

  /**
   * The default arms animation when we're idle.
   */
  mMesh1PAnimClass: classReference<Unknown<'UAnimInstance'>>;

  /**
   * Pawn mesh: 3rd person view
   */
  mMesh3P: Unknown<'USkeletalMeshComponent'>;

  /**
   * As we have no foliage actor to actually put pickup code in, we use this actor as a proxy
   */
  mFoliagePickupProxyClass: classReference<AFGFoliagePickup>;

  /**
   * Actor that's used when trying to pickup foliage
   */
  mFoliagePickupProxy: AFGFoliagePickup;

  /**
   * This is the infamous build gun.
   */
  mBuildGun: AFGBuildGun;

  /**
   * Reference to the resource scanner
   */
  mResourceScanner: AFGResourceScanner;

  /**
   * Reference to the resource miner
   */
  mResourceMiner: AFGResourceMiner;

  /**
   * The best usable actor nearby.
   */
  mBestUsableActor: AActor;

  /**
   * Of the usable actor we are looking at, UPROPERTY to prevent the AdditionalData to be garbage collected
   */
  mCachedUseState: FUseState;

  /**
   * Anim instance class to use in third person
   */
  mAnimInstanceClass: classReference<Unknown<'UAnimInstance'>>;

  /**
   * Anim instance class to use in first person
   */
  mAnimInstanceClass1P: classReference<Unknown<'UAnimInstance'>>;

  /**
   * time (in seconds) it takes to revive a fellow player
   */
  mReviveDuration: float;

  /**
   * The starting resources for the player
   */
  mStartingResources: FItemAmount[];

  /**
   * The starting resources for the player if we are NOT in shipping
   */
  mStartingResourceForTesting: FItemAmount[];

  /**
   * @todo: This should not be specified for each pawn
   */
  mDrownDamageDamageType: classReference<UFGDamageType>;

  /**
   * The amount of damage to receive when drowning.
   */
  mDrownDamage: float;

  /**
   * Time between each application of drowning damage (in seconds)
   */
  mDrownDamageInterval: float;

  /**
   * The player that we are reviving
   */
  mPlayerToRevive: AFGCharacterPlayer;

  /**
   * The pickup we are collecting
   */
  mPickupToCollect: AFGItemPickup;

  /**
   * Default effects to play when a foot hits the ground when the material doesn't exist in m1PFootstepEffect
   */
  m1PDefaultFootstepEffect: FFootstepEffect;

  /**
   * Effects to play when a foot hits the ground in first person
   */
  m1PFootstepEffect: FFootstepEffectSurface[];

  /**
   * Effects to play when a foot hits the ground in first person
   */
  m1PFootstepEvent: Unknown<'UAkAudioEvent'>[];

  /**
   * latest safe ground location positions
   */
  mLastSafeGroundPositions: Vector;

  /**
   * used for knowing which is the latest written safe ground position
   */
  mLastSafeGroundPositionLoopHead: int32;

  /**
   * Player camera
   */
  mCameraComponent: Unknown<'UCameraComponent'>;

  /**
   * Spring arm for camera
   */
  mSpringArmComponent: Unknown<'USpringArmComponent'>;

  /**
   * This is the equipment we hold in our hands.
   */
  mActiveEquipments: AFGEquipment[];

  /**
   * Simulated on the client so they know what to unequip.
   */
  mClientActiveEquipments: AFGEquipment[];

  /**
   * @todo They should be in the inventory later on. But right now this is what you toggle with
   */
  mAllAttachments: AFGEquipmentAttachment[];

  /**
   * Remote client representation of the equipment
   */
  mActiveAttachments: AFGEquipmentAttachment[];

  /**
   * Current camera mode for the character
   */
  mCurrentCameraMode: ECameraMode;

  /**
   * What camera mode were we in before we opened the
   */
  mPlayerPreferredCameraMode: ECameraMode;

  /**
   * The players inventory.
   */
  mInventory: UFGInventoryComponent;

  /**
   * The resource forms that are allowed in players inventory.
   */
  mAllowedResourceFormsInInventory: EResourceForm[];

  /**
   * The belt slot inventory.
   */
  mBeltSlot: UFGInventoryComponentBeltSlot;

  /**
   * The players inventory.
   */
  mTrashSlot: UFGInventoryComponent;

  /**
   * Allow toggling of camera modes
   */
  mAllowCameraToggling: boolean;

  /**
   * Maximum distance we use objects on
   */
  mUseDistance: float;

  /**
   * Counter used for replicating to remote clients when something is picked up
   */
  mPickupCounter: int8;

  /**
   * The player that is reviving me
   */
  mReviver: AFGCharacterPlayer;

  /**
   * Reference to the default walk head bob shake
   */
  mDefaultWalkHeadBobShake: classReference<Unknown<'UCameraShake'>>;

  /**
   * Reference to the default sprint head bob shake
   */
  mDefaultSprintHeadBobShake: classReference<Unknown<'UCameraShake'>>;

  /**
   * Vehicle currently driven by pawn.
   */
  mDrivenVehicle: AFGDriveablePawn;

  mSavedDrivenVehicle: AFGDriveablePawn;

  mOutlineComponent: UFGOutlineComponent;

  /**
   * Health Generation
   */
  mHealthGenerationThreshold: float;

  mHealthGenerationAmount: float;

  mHealthGenerationInterval: float;

  mHealthGenerationWaitTime: float;

  /**
   * The accumulated normalized radiation intensity of the players current location
   */
  mRadiationIntensity: float;

  /**
   * The angle from the players view to the accumulated radiation damage
   */
  mRadiationDamageAngle: float;

  /**
   * How much immunity do we have for radiation
   */
  mRadiationImmunity: float;

  /**
   * Are we in a radioactive zone
   */
  mInRadioactiveZone: boolean;

  /**
   * How fast the blend is
   */
  mCameraOffsetBlendSpeed: float;

  /**
   * Replicated value of sliding status. Used to let non owning player know whats happening
   */
  mReplicatedIsSliding: boolean;

  /**
   * How fast the blend is for crouch and slide
   */
  mCrouchSpeed: float;

  /**
   * How fast the blend is from crouch/slide to stand
   */
  mStandSpeed: float;

  /**
   * How fast the blend is from slide to crouch
   */
  mSlideToCrouchSpeed: float;

  mNoUpdate: boolean;
}
