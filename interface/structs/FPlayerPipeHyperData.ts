import { AActor } from '../native/classes';
import { float } from '../native/primitive';
import { Vector } from '../native/structs';

export interface FPlayerPipeHyperData {
  /**
   * The pipe we are currently traveling in
   */
  mTravelingPipeHyper: AActor;

  mMinPipeSpeed: float;

  mPipeGravityStrength: float;

  mPipeFriction: float;

  mPipeConstantAcceleration: float;

  mPipeCurveDamping: float;

  /**
   * World space direction of pipe last frame.
   */
  mPipeDirectionLast: Vector;

  /**
   * World space direction of pipe in current location.
   */
  mPipeDirection: Vector;

  /**
   * Distance to the end of the whole pipe chain, but maximum of 2000 (To save time on calculating it on update)
   */
  mDistanceToEndOfPipe: float;

  /**
   * maximum of 2000 (To save time on calculating it on update)
   */
  mCombinedLengthTillEndOfPipesINcludingCurrent: float;

  mMaxCurveDiffThisFrame: float;

  mMaxCurveDiffSmooth: float;

  /**
   * used so we can reduce even further due to curves, but not have the pipes too slow in upwards slopes
   */
  mPipeTempMinSpeed: float;

  /**
   * World space position of the end of the pipe chain.. Only guaranteed to be accurate if the end is within 2000 units.
   */
  mFulPipeEndPoint: Vector;

  /**
   * World space direction of the end of the pipe chain.. Only guaranteed to be accurate if the end is within 2000 units.
   */
  mFulPipeEndDir: Vector;
}
