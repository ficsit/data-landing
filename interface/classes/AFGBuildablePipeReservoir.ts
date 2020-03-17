import { IFGFluidIntegrantInterface } from '../interfaces/IFGFluidIntegrantInterface';
import { float } from '../native/primitive';
import { FFluidBox } from '../structs/FFluidBox';
import { FQuantizedReservoirIndicatorData } from '../structs/FQuantizedReservoirIndicatorData';

import { AFGBuildableFactory } from './AFGBuildableFactory';
import { UFGPipeConnectionComponent } from './UFGPipeConnectionComponent';

export interface AFGBuildablePipeReservoir extends AFGBuildableFactory, IFGFluidIntegrantInterface {
  /**
   * When stacking reservoirs how high above should it place
   */
  mStackingHeight: float;

  /**
   * Fluid box used for flow calculations
   */
  mFluidBox: FFluidBox;

  /**
   * The storage capacity in cubic meters. [m^3]
   */
  mStorageCapacity: float;

  /**
   * Cached array of connection components
   */
  mPipeConnections: UFGPipeConnectionComponent[];

  /**
   * Quantized data used by the indicators.
   */
  mIndicatorData: FQuantizedReservoirIndicatorData;
}
