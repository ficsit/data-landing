import { AFGBuildableHologram } from './AFGBuildableHologram';
import { UFGCircuitConnectionComponent } from './UFGCircuitConnectionComponent';

export interface AFGPowerPoleHologram extends AFGBuildableHologram {
  /**
   * The connection wires snap to, used when placing a pole automatically.
   */
  mSnapConnection: UFGCircuitConnectionComponent;
}
