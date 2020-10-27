import { IFGFluidIntegrantInterface } from '../interfaces/IFGFluidIntegrantInterface';
import { float } from '../native/primitive';

import { UFGPipeConnectionComponent } from './UFGPipeConnectionComponent';

export interface UFGPipeConnectionFactory extends UFGPipeConnectionComponent, IFGFluidIntegrantInterface {
  /**
   * Volume of the fluid box inside this attachment. [m3]
   */
  mFluidBoxVolume: float;

  /**
   * If this connection is a producer type, should it apply the factory settings default pressure?
   */
  mApplyAdditionalPressure: boolean;
}
