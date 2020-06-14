import { float } from '../native/primitive';
import { Rotator, Vector } from '../native/structs';
import { Unknown } from '../native/unknown';

import { AFGCharacterBase } from './AFGCharacterBase';

export interface UFGCharacterAnimInstance extends Unknown<'UAnimInstance'> {
  /**
   * in degrees
   */
  mDirection: float;

  /**
   * acceleration length normalized
   */
  mAccelerationVectorLength: float;

  /**
   * Velocity
   */
  mVelocity: Vector;

  /**
   * Velocity normalized in local space
   */
  mVelocityLocalNormalized: Vector;

  /**
   * Acceleration normalized in local space
   */
  mAccelerationLocalNormalized: Vector;

  /**
   * Velocity normalized in local space
   */
  mActorTransform: Unknown<'FTransform'>;

  /**
   * Caching the character one
   */
  mCachedCharacter: AFGCharacterBase;

  /**
   * Caching movement mode
   */
  mCachedMovementMode: Unknown<'EMovementMode'>;

  /**
   * Cached default value of movement mode
   */
  mCachedDefaultWalkMode: Unknown<'EMovementMode'>;

  /**
   * Speed in movement
   */
  mSpeed: float;

  /**
   * Saved speed from last time we checked
   */
  mSpeedLastFrame: float;

  /**
   * Speed in movement Z
   */
  mSpeedZ: float;

  /**
   * Walk rotation
   */
  mWalkRotation: float;

  /**
   * Are we standing still
   */
  mIsStandingStill: boolean;

  /**
   * Did we begin movement
   */
  mIsAccelerating: boolean;

  /**
   * Used for lean/run calculations
   */
  mYawDelta: float;

  /**
   * Where do we want to aim
   */
  mAimYaw: float;

  /**
   * Configable interpspeed
   */
  mAimYawInterpSpeed: float;

  /**
   * Rotation of root component
   */
  mRootRotation: Rotator;

  /**
   * should we turn left
   */
  mTurnInPlaceLeft: boolean;

  /**
   * or right
   */
  mTurnInPlaceRight: boolean;

  /**
   * are we done turning?
   */
  mTurnInPlaceComplete: boolean;

  /**
   * Rotation values when turning left
   */
  mTurnLeftCurve: Unknown<'UCurveFloat'>;

  /**
   * Rotation values when turning right
   */
  mTurnRightCurve: Unknown<'UCurveFloat'>;

  /**
   * I don't even know anymore, converting BP stuff
   */
  mActorRotationForwardVector: Vector;

  /**
   * I don't even know anymore, converting BP stuff
   */
  mActorRotationForwardVectorReference: Vector;

  /**
   * I don't even know anymore, converting BP stuff
   */
  mAimYawReductionStartTime: float;

  /**
   * I don't even know anymore, converting BP stuff
   */
  mAimYawReductionCurrentTime: float;

  /**
   * Last Rotation saved
   */
  mActorRotationLastTick: Rotator;

  /**
   * Editable for Bigges sake
   */
  mYawRotationStrength: float;

  /**
   * Editable for Bigges sake
   */
  mYawRotationInterpSpeed: float;

  /**
   * Configable interp speed for root rotation
   */
  mRootRotationInterpSpeed: float;

  /**
   * reset variable for turn stuff
   */
  mAllowedToTurn: boolean;

  /**
   * How long the turn should take
   */
  mTurnInPlaceDefaultTime: float;

  /**
   * should we run the turn in place code
   */
  mUseTurnInPlace: boolean;

  /**
   * should we run the turn in place code
   */
  mCanUpdateActorRotationReference: boolean;

  /**
   * When should we turn to the right
   */
  mYawAimMaxValue: float;

  /**
   * when should we turn to the left
   */
  mYawAimMinValue: float;

  /**
   * Look up
   */
  mAimPitch: float;

  /**
   * Interpspeed
   */
  mAimPitchInterpSpeed: float;

  /**
   * Used in the 1p anim of the player only
   */
  mGetDeltaPitchRotation: boolean;

  /**
   * Should we do pre land calculations?
   */
  mUsePreLand: boolean;

  /**
   * Pre land value
   */
  mPreLand: boolean;

  /**
   * Multiplier for velocity that determines how long the preland trace is
   */
  mPreLandVelocityMultiplier: float;

  /**
   * What to collide against in pre land
   */
  mPreLandCollisionChannels: Unknown<'ECollisionChannel'>[];
}
