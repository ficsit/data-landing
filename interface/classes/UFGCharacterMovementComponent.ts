import { float, uint32 } from '../native/primitive';
import { Vector } from '../native/structs';
import { Unknown } from '../native/unknown';
import { FPlayerPipeHyperData } from '../structs/FPlayerPipeHyperData';

import { AFGHookshot } from './AFGHookshot';
import { AFGJetPack } from './AFGJetPack';
import { AFGJumpingStilts } from './AFGJumpingStilts';
import { AFGParachute } from './AFGParachute';
import { UFGLadderComponent } from './UFGLadderComponent';

export interface UFGCharacterMovementComponent extends Unknown<'UCharacterMovementComponent'> {
  /**
   * Timestamp of last time we jumped
   */
  mLastJumpTimeStamp: float;

  /**
   * If true, try to parachuting on next update. If false, try to stop parachuting on next update.
   */
  mIsParachuting: uint32;

  /**
   * The speed at which a character climbs ladders
   */
  mClimbSpeed: float;

  /**
   * The speed at witch a character sprints
   */
  mMaxSprintSpeed: float;

  /**
   * The minimum dot value between velocity and character forward to allow sprint.
   */
  mSprintMinDotResult: float;

  /**
   * Force to apply when jumping off a ladder.
   */
  mJumpOffLadderVelocity: float;

  /**
   * A cached instance of the equipment that issued jet pack thrust
   */
  mCachedJetPack: AFGJetPack;

  /**
   * A cached instance of the equipment that issued parachuting
   */
  mCachedParachute: AFGParachute;

  /**
   * A cached instance of the equipment that set our hookshot location
   */
  mCachedHookshot: AFGHookshot;

  /**
   * A cached instance of the equipment that set our jumping stilts
   */
  mCachedJumpingStilts: AFGJumpingStilts;

  /**
   * The ladder we're climbing; null if not climbing.
   */
  mOnLadder: UFGLadderComponent;

  mPipeData: FPlayerPipeHyperData;

  /**
   * Get velocity from curve when sliding
   */
  mSlideCurve: Unknown<'UCurveFloat'>;

  /**
   * Gets the multiplier for slope velocity
   */
  mSlopeCurve: Unknown<'UCurveFloat'>;

  /**
   * Max angle ( in radians ) for allowing to slide
   */
  mMaxSlideAngle: float;

  /**
   * Velocity for the actor without external influence like conveyor belts
   */
  mBaseVelocity: Vector;

  /**
   * Multiplier for boost jump for Z velocity
   */
  mBoostJumpZMultiplier: float;

  /**
   * Multiplier for velocity in 2D when boost jumping
   */
  mBoostJumpVelocityMultiplier: float;

  /**
   * How long time after a slide a jump can be input and be counted as a boost jump
   */
  mBoostJumpTimeWindow: float;
}
