import { IFGFluidIntegrantInterface } from '../interfaces/IFGFluidIntegrantInterface';
import { Unknown } from '../native/unknown';

export interface UFGPipeConnectionFactory
  extends Unknown<'UFGPipeConnectionComponent'>,
    IFGFluidIntegrantInterface {
  /**
   * If this connection is a producer type, should it apply the factory settings default pressure?
   */
  mApplyAdditionalPressure: boolean;
}
