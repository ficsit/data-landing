import { IFGFluidIntegrantInterface } from '../interfaces/IFGFluidIntegrantInterface';

import { UFGPipeConnectionComponent } from './UFGPipeConnectionComponent';

export interface UFGPipeConnectionFactory extends UFGPipeConnectionComponent, IFGFluidIntegrantInterface {
  /**
   * If this connection is a producer type, should it apply the factory settings default pressure?
   */
  mApplyAdditionalPressure: boolean;
}
