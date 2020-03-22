import { AFGPoleHologram } from './AFGPoleHologram';
import { UFGFactoryConnectionComponent } from './UFGFactoryConnectionComponent';

export interface AFGConveyorPoleHologram extends AFGPoleHologram {
  /**
   * The connection conveyors snap to, used when placing a pole automatically.
   */
  mSnapConnection: UFGFactoryConnectionComponent;
}
