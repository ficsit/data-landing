import { float } from '../native/primitive';
import { Unknown } from '../native/unknown';
import { FAnimInstanceProxyFactory } from '../structs/FAnimInstanceProxyFactory';

export interface UFGFAnimInstanceFactory extends Unknown<'UAnimInstance'> {
  mProxy: FAnimInstanceProxyFactory;

  /**
   * If we should use the ramp up system
   */
  mUseRampUp: boolean;

  /**
   * Time factory should spend ramping up
   */
  mRampUpTime: float;

  /**
   * Time factory should spend ramping up
   */
  mRampDownTime: float;

  /**
   * Actual animation length
   */
  mDefaultCycleTime: float;

  /**
   * RTPC for sound speed
   */
  mSoundSpeedRTPC: string;

  /**
   * How often RTPC for sound speed should update
   */
  mSoundSpeedRTPCInterval: float;

  /**
   * Accumulator for the interval
   */
  mSoundSpeedAccumulator: float;

  /**
   * Is this factory a generator?
   */
  mIsGenerator: boolean;

  /**
   * Min value for RTPC range
   */
  mSoundSpeedRTPCMinValue: float;

  /**
   * Max value for RTPC range
   */
  mSoundSpeedRTPCMaxValue: float;
}
