import { float, uint8 } from '../native/primitive';

export interface FAnimInstanceProxyFactory {
  /**
   * saved DT
   */
  mDeltaTime: float;

  /**
   * saved production progress for the factory
   */
  mProductionProgress: float;

  /**
   * saved production cycle time for the factory
   */
  mProductionCycleTime: float;

  /**
   * Multiplier for play rate
   */
  mAnimPlayRate: float;

  /**
   * Time factory should spend ramping up
   */
  mRampUpTime: float;

  /**
   * Time factory should not produce stuff
   */
  mTimeNotProducing: float;

  /**
   * Time factory should spend ramping up
   */
  mRampDownTime: float;

  /**
   * Last frames production progress
   */
  mLastProductionProgress: float;

  /**
   * Play rate for recipe
   */
  mRecipePlayRate: float;

  /**
   * Length of production cycle
   */
  mCycleTime: float;

  /**
   * Actual animation length
   */
  mDefaultCycleTime: float;

  /**
   * Frame to...start?...i dunno
   */
  mStartFrame: float;

  /**
   * From 0.0 - 1.0 Only valid for generators!
   */
  mLoadPercentage: float;

  /**
   * valid for generators!
   */
  mHasFuel: boolean;

  /**
   * Factory has power
   */
  mHasPower: uint8;

  /**
   * Factory is producing something
   */
  mIsProducing: uint8;

  mIsActivated: uint8;

  /**
   * A production cycle was completed
   */
  mCycleComplete: uint8;

  /**
   * If we should use the ramp up system
   */
  mUseRampUp: uint8;

  /**
   * Is the owning actor a generator
   */
  mIsGenerator: uint8;

  /**
   * True if generator has power and is producing
   */
  mIsFuelGeneratorOnline: uint8;
}
