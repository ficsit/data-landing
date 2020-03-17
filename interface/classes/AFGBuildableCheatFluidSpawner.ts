import { float } from '../native/primitive';
import { classReference } from '../native/references';
import { FFluidBox } from '../structs/FFluidBox';

import { UFGItemDescriptor } from './UFGItemDescriptor';
import { UFGPipeConnectionComponent } from './UFGPipeConnectionComponent';

export interface AFGBuildableCheatFluidSpawner {
  /**
   * Resource type to spawn.
   */
  mResourceType: classReference<UFGItemDescriptor>;

  /**
   * Spawn rate of the fluid, 0 means unlimited. [m3/s]
   */
  mSpawnRate: float;

  /**
   * Actual spawn rate of the fluid. [m3/s]
   */
  mMeasuredSpawnRate: float;

  /**
   * Pressure from this output, 0 no added pressure. [meters]
   */
  mPressure: float;

  /**
   * Connection fetched from blueprint.
   */
  mOutputConnection: UFGPipeConnectionComponent;

  /**
   * Simulation data for this fluid integrant.
   */
  mFluidBox: FFluidBox;
}
