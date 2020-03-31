import { float } from '../native/primitive';
import { classReference } from '../native/references';
import { Vector } from '../native/structs';
import { Unknown } from '../native/unknown';
import { FFootstepEffect } from '../structs/FFootstepEffect';
import { FFootstepEffectSurface } from '../structs/FFootstepEffectSurface';

import { UFGDamageType } from './UFGDamageType';
import { UFGHealthComponent } from './UFGHealthComponent';

export interface AFGCharacterBase extends Unknown<'ACharacter'>, Unknown<'IFGSaveInterface'> {
  /**
   * When receiving FootDown on index 2, then we will trace from mFeetNames[2] socket for ground
   */
  mFeetNames: string[];

  /**
   * Default effects to play when a foot hits the ground when the material doesn't exist in mFootstepEffects
   */
  mDefaultFootstepEffect: FFootstepEffect;

  /**
   * Effects to play when a foot hits the ground
   */
  mFootstepEffect: FFootstepEffectSurface[];

  /**
   * Audio event to play (where index in array is the feet index passed from AnimNotify_FootDown)
   */
  mFootstepAudioEvents: Unknown<'UAkAudioEvent'>[];

  /**
   * Maximum distance we want to play footstep particles at
   */
  mMaxFootstepParticleSpawnDistance: float;

  /**
   * Maximum distance we want to spawn footsteps decals at
   */
  mMaxFootstepDecalSpawnDistance: float;

  /**
   * Size of footstep decals
   */
  mFootstepDecalSize: Vector[];

  /**
   * Lifetime of footstep decals
   */
  mFootstepDecalLifetime: float;

  /**
   * Keeps track of our current health
   */
  mHealthComponent: UFGHealthComponent;

  /**
   * How much damage to take falling with a given velocity
   */
  mFallDamageCurve: Unknown<'UCurveFloat'>;

  /**
   * Overrides the default fall damage curve, utilized by Equipment
   */
  mFallDamageCurveOverride: Unknown<'UCurveFloat'>;

  /**
   * @todo: This should not be specified for each pawn
   */
  mFallDamageDamageType: classReference<UFGDamageType>;

  /**
   * The maximum time after death (in seconds) the pawn will stay in the world, so it will be removed even if it's in sight after this time
   */
  mMaxDeathStayTime: float;

  /**
   * How often will we check if the pawn is in sight of any player
   */
  mDeathRemoveCheckTime: float;

  /**
   * Multiplier for targeting desirability
   */
  mEnemyTargetDesirability: float;

  /**
   * Sound played when pawn takes damage
   */
  mTakeDamageSound: Unknown<'UAkAudioEvent'>;

  /**
   * Sound played when pawn dies
   */
  mDeathSound: Unknown<'UAkAudioEvent'>;

  /**
   * Event posted when landing
   */
  mLandEvent: Unknown<'UAkAudioEvent'>;

  /**
   * Particle for when pawn takes damage
   */
  mTakeDamageParticle: Unknown<'UParticleSystem'>;

  /**
   * Min push velocity required to start ragdoll
   */
  mMinVehiclePushVelocityForRagdoll: float;

  /**
   * time in seconds until character gets up from ragdoll if alive
   */
  mTimeToGetUpFromRagdoll: float;

  /**
   * the furthest distance we can move during ragdoll before we are considered still enough to stand up from ragdoll
   */
  mMaxDistanceMovedToGetUp: float;

  /**
   * true if ragdolled
   */
  mIsRagdolled: boolean;

  mRagdollMeshLoc: Vector;

  mRagdollMeshVelocity: Vector;

  /**
   * Name of the bone we take mesh location from
   */
  mRagdollMeshLocBoneName: string;

  /**
   * Name of the bone we take physics velocity from
   */
  mRagdollMeshPhysicsBoneName: string;

  mSyncBodyMaxDistance: float;

  /**
   * Should the auto momentum be applied when taking damage?
   */
  mApplyDamageMomentum: boolean;

  /**
   * Damage types that this character is immune to
   */
  mIgnoredDamageTypes: classReference<Unknown<'UDamageType'>>[];

  /**
   * How much more damage should be dealt when taking a weakspot hit
   */
  mWeakspotMultiplier: float;

  /**
   * Bone names that result in a weakspot hit
   */
  mWeakspotBoneNames: string[];

  /**
   * Multiplier for this creature and normal damage taken
   */
  mNormalDamageMultiplier: float;

  /**
   * Used to let client know when a pawn gets possessed/unpossessed
   */
  mIsPossessed: boolean;
}
