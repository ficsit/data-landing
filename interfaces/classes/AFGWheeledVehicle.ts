import { UMaterial } from '../native/assets';
import { float, int32 } from '../native/primitive';
import { classReference } from '../native/references';
import { Vector } from '../native/structs';
import { Unknown } from '../native/unknown';
import { FParticleTemplatePair } from '../structs/FParticleTemplatePair';
import { FReplicatedAddedVelocitiesState } from '../structs/FReplicatedAddedVelocitiesState';
import { FSurfaceParticlePair } from '../structs/FSurfaceParticlePair';
import { FTireParticleCollection } from '../structs/FTireParticleCollection';
import { FTireTrackDecalDetails } from '../structs/FTireTrackDecalDetails';

import { AFGVehicle } from './AFGVehicle';
import { UFGInventoryComponent } from './UFGInventoryComponent';
import { UFGItemDescriptor } from './UFGItemDescriptor';
import { UFGTargetPointLinkedList } from './UFGTargetPointLinkedList';
import { UFGWorkBench } from './UFGWorkBench';

export interface AFGWheeledVehicle extends AFGVehicle {
  /**
   * Workbench component
   */
  mWorkBench: UFGWorkBench;

  mUpdateMovementHandle: Unknown<'FTimerHandle'>;

  /**
   * Broadcast when transfer status is updated
   */
  TranferStatusChangedDelegate: Unknown<'FTranferStatusChanged'>;

  /**
   * replicated state of vehicle
   */
  mReplicatedState: FReplicatedAddedVelocitiesState;

  /**
   * This vehicles fuel consumption in MW/s
   */
  mFuelConsumption: float;

  /**
   * Amount left of the currently burned piece of fuel. In megawatt seconds (MWs).
   */
  mCurrentFuelAmount: float;

  /**
   * Are we currently in the process of loading inventory
   */
  mIsLoadingVehicle: boolean;

  /**
   * Are we currently in the process of unloading inventory
   */
  mIsUnloadingVehicle: boolean;

  /**
   * Type of the currently burned piece of fuel.
   */
  mCurrentFuelClass: classReference<UFGItemDescriptor>;

  /**
   * Is vehicle in air
   */
  mIsInAir: boolean;

  /**
   * Is there at least 1 wheel on the ground
   */
  mNumWheelsOnGround: int32;

  /**
   * vehicle simulation component
   */
  mVehicleMovement: Unknown<'UWheeledVehicleMovementComponent'>;

  /**
   * Distance between tire track decals
   */
  mDistBetweenDecals: float;

  /**
   * Time, in seconds, for the tire track decal to live
   */
  mDecalLifespan: float;

  /**
   * default tire track decal. Can be empty for no default.
   */
  mDefaultTireTrackDecal: UMaterial;

  /**
   * tire track decal  settings
   */
  mTireTrackDecals: FTireTrackDecalDetails[];

  /**
   * The scale for the decal. This will probably need to be uniquely set for every vehicle.
   */
  mDecalSize: Vector;

  /**
   * When foliage is run over by this vehicle, this is the radius of foliage that should be cleared
   */
  mFoliageDestroyRadius: float;

  /**
   * Strength of the angular velocity yaw modifier when on the ground and holding "drift"
   */
  mAddedGroundAngularVelocityStrengthYaw: float;

  /**
   * Strength of the angular velocity pitch modifier when on the ground and holding "drift"
   */
  mAddedGroundAngularVelocityStrengthPitch: float;

  /**
   * Strength of the added air control angular yaw velocity
   */
  mAddedAirControlAngularVelocityStrengthYaw: float;

  /**
   * Strength of the added air control angular pitch velocity
   */
  mAddedAirControlAngularVelocityStrengthPitch: float;

  mNaturalAngularVelocityStrengthYaw: float;

  mNaturalAngularVelocityStrengthPitch: float;

  mNaturalAirAngularVelocityStrengthYaw: float;

  mNaturalAirAngularVelocityStrengthPitch: float;

  mAddedAngularVelocityInputSmoothingSpeed: float;

  /**
   * Collision box for detecting overlaps with foliage only. Shape modified in BP
   */
  mFoliageCollideBox: Unknown<'UBoxComponent'>;

  /**
   * Our component used for simulated movement
   */
  mSimulationMovementComponent: Unknown<'UFloatingPawnMovement'>;

  /**
   * Inventory for fuel
   */
  mFuelInventory: UFGInventoryComponent;

  /**
   * Inventory for storage
   */
  mStorageInventory: UFGInventoryComponent;

  mInventorySize: int32;

  mTireParticleCollection: FTireParticleCollection[];

  /**
   * Map that lists which templates corresponds to what surface type
   */
  mVehicleParticeMap: FSurfaceParticlePair[];

  /**
   * Contains references to all current active partice systems on the tires
   */
  mActiveParticleAndTemplate: FParticleTemplatePair[];

  /**
   * Base name of socket use for tire particles
   */
  mTireEffectSocketName: string;

  /**
   * Linked list with target nodes that make up our path to travel
   */
  mTargetNodeLinkedList: UFGTargetPointLinkedList;

  /**
   * Should targets nodes be visible
   */
  mIsPathVisible: boolean;

  /**
   * location of the last placed decals for each wheel
   */
  mLastDecalLocations: Vector[];

  /**
   * If we have overlapped foliage go nuts and destroy them
   */
  mOverlappedHISMComponents: Unknown<'UHierarchicalInstancedStaticMeshComponent'>[];

  mAddedAngularVelocityInputPitch: float;

  mAddedAngularVelocityInputYaw: float;

  mReverseAddedAngularVelocityYawMultiplier: float;

  /**
   * if true, can control vehicle in air
   */
  mHasAirControl: boolean;

  /**
   * length to trace to check for ground
   */
  mGroundTraceLength: float;

  /**
   * max change in linear velocity since last frame
   */
  mMaxDeltaLinearVelocity: float;

  /**
   * max change in angular velocity since last frame
   */
  mMaxDeltaAngularVelocity: float;

  /**
   * Amount of damping to add to roll
   */
  mRollStabilisationStrength: float;

  /**
   * The min roll angle to consider the vehicle upside down - only as far as roll goes. Other factors are also taken into account.
   */
  mMaxRollAngleForUpsideDown: float;

  /**
   * The max roll angle to consider the vehicle flat on ground - only as far as roll goes. Other factors are also taken into account.
   */
  mMaxFlatOnGroundRollAngleLimit: float;

  /**
   * If roll angle is over this value then assisted velocities will not be applied.
   */
  mMaxRollForActivationOfAssistedVelocities: float;

  mMaxSpeedForAddedAcceleration: int32;

  /**
   * Maximum amount of force that can be added to assist acceleration
   */
  mMaxAssistedAcceleration: float;

  /**
   * If true, Assisted Acceleration & drifting is be in effect
   */
  mHasAssistedVelocities: boolean;

  /**
   * If true, roll stabilisation is be in effect
   */
  mHasRollStabilisation: boolean;

  /**
   * the lateral force we add for drifting
   */
  mDriftingLateralForce: float;

  /**
   * the upward force we add for drifting (this is to reduce friction & encourage oversteer)
   */
  mDriftingUpwardForce: float;

  mDriftForwardForceStrengthCurve: Unknown<'UCurveFloat'>;

  mDriftForceBones: string[];

  mMinAngleForDrift: float;

  /**
   * Cached surface material under the first tire
   */
  mCachedSurfaceMaterial: Unknown<'UPhysicalMaterial'>;

  /**
   * Do we need fuel to drive
   */
  mNeedsFuelToDrive: boolean;
}
