import { float } from '../native/primitive';
import { FFluidBox } from '../structs/FFluidBox';

import { UFGPipeConnectionComponent } from './UFGPipeConnectionComponent';

export interface AFGBuildableCheatFluidSink {
  /**
   * Sink rate of the fluid, 0 means sink everything. [m3/s]
   */
  mSinkRate: float;

  /**
   * Actual sink rate of the fluid. [m3/s]
   */
  mMeasuredSinkRate: float;

  /**
   * Sink only if the content is above this threshold.
   */
  mMinimumContent: float;

  /**
   * Sink only if the pressure is above this threshold.
   */
  mMinimumPressure: float;

  /**
   * Cached input component from blueprint.
   */
  mInputConnection: UFGPipeConnectionComponent;

  /**
   * Simulation data for this fluid integrant.
   */
  mFluidBox: FFluidBox;
}
