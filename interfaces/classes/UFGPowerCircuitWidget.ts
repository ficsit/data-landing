import { Unknown } from '../native/unknown';

import { UFGPowerCircuit } from './UFGPowerCircuit';

export interface UFGPowerCircuitWidget extends Unknown<'UUserWidget'> {
  /**
   * Delegate for getting the number of items to display.
   */
  mGetPowerCircuitEvent: Unknown<'FGetPowerCircuit'>;

  /**
   * Power circuit we're observing.
   */
  mPowerCircuit: UFGPowerCircuit;
}
