import { UFGCircuitConnectionComponent } from './UFGCircuitConnectionComponent';
import { UFGPowerInfoComponent } from './UFGPowerInfoComponent';

export interface UFGPowerConnectionComponent extends UFGCircuitConnectionComponent {
  mPowerInfo: UFGPowerInfoComponent;
}
