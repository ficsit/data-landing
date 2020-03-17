import { int32 } from '../native/primitive';

import { AFGPipeNetwork } from './AFGPipeNetwork';

export interface AFGPipeSubsystem {
  /**
   * Map with all circuits and the circuit ID as the key.
   */
  mNetworks: Record<int32, AFGPipeNetwork>;
}
