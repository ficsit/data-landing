import { float, uint8 } from '../native/primitive';
import { Rotator, Vector } from '../native/structs';
import { Unknown } from '../native/unknown';

export interface FAnimInstanceProxyRailRoadVehicle extends Unknown<'FAnimInstanceProxy'> {
  /**
   * saved DT
   */
  mDeltaTime: float;

  /**
   * Front Bogie Rotation
   */
  mFrontBogieRotation: Rotator;

  /**
   * Front Bogie Rotation
   */
  mBackBogieRotation: Rotator;

  /**
   * Wheel Rotation
   */
  mWheelRotation: Rotator;

  /**
   * Front Connector Rotation
   */
  mFrontConnectorRotation: Rotator;

  /**
   * Front Connector Translation
   */
  mFrontConnectorTranslation: Vector;

  /**
   * Back Connector Rotation
   */
  mBackConnectorRotation: Rotator;

  /**
   * Back Connector Translation
   */
  mBackConnectorTranslation: Vector;

  /**
   * Track curvature
   */
  mTrackCurvature: Rotator;

  /**
   * Forward speed
   */
  mForwardSpeed: float;

  /**
   * Tractive force
   */
  mTractiveForce: float;

  /**
   * Hand break
   */
  mHandBrakeForce: float;

  /**
   * Throttle
   */
  mThrottle: float;

  /**
   * brake force
   */
  mBrakeForce: float;

  /**
   * hand brake force multiplied with forward speed and clamped within nice values
   */
  mHandBrakeForceSpeed: float;

  /**
   * Glow value for when using handbrake on moving vehicle
   */
  mHandBrakeGlow: float;

  /**
   * Spawn rate of brake particles
   */
  mHandBrakeVfxSpawn: float;

  /**
   * Bigge values, I dunno
   */
  mAGBrakePlayRate: float;

  /**
   * Is Moving
   */
  mIsMoving: uint8;

  /**
   * is break boosting
   */
  mIsUsingHandBrake: uint8;

  /**
   * Is Locomotive
   */
  mIsLocomotive: uint8;

  /**
   * Has Power
   */
  mHasPower: uint8;

  /**
   * Is throttle value zero
   */
  mAGThrottleZero: uint8;

  /**
   * Is throttle value positive
   */
  mAGThrottlePositive: uint8;

  /**
   * Phase when train starts moving
   */
  mAGStartToRunningTransition: uint8;

  /**
   * Bigge values, I dunno
   */
  mAGHandBrakeTransition01: uint8;

  /**
   * Bigge values, I dunno
   */
  mAGHandBrakeTransition02: uint8;

  /**
   * Bigge values, I dunno
   */
  mAGBrakeForcePositive: uint8;

  /**
   * Bigge values, I dunno
   */
  mAGBrakeToRunningTransition: uint8;

  /**
   * Bigge values, I dunno
   */
  mAGHandBrakeReset01: uint8;

  /**
   * Bigge values, I dunno
   */
  mAGHandBrakeReset02: uint8;

  /**
   * Bigge values, I dunno
   */
  mAGHandBrakeStop: uint8;
}
