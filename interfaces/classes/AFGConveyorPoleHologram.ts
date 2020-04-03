import { Unknown } from '../native/unknown';

import { AFGPoleHologram } from './AFGPoleHologram';

export interface AFGConveyorPoleHologram extends AFGPoleHologram {
  /**
   * The connection conveyors snap to, used when placing a pole automatically.
   */
  mSnapConnection: Unknown<'UFGFactoryConnectionComponent'>;
}
