import { IFGFluidIntegrantInterface } from '../interfaces/IFGFluidIntegrantInterface';
import { float } from '../native/primitive';
import { classReference } from '../native/references';
import { Unknown } from '../native/unknown';
import { FFluidBox } from '../structs/FFluidBox';

import { AFGBuildableFactory } from './AFGBuildableFactory';
import { UFGItemDescriptor } from './UFGItemDescriptor';

export interface AFGBuildableCheatFluidSpawner extends AFGBuildableFactory, IFGFluidIntegrantInterface {
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
  mOutputConnection: Unknown<'UFGPipeConnectionComponent'>;

  /**
   * Simulation data for this fluid integrant.
   */
  mFluidBox: FFluidBox;
}
