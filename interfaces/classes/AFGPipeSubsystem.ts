import { int32 } from '../native/primitive';
import { Unknown } from '../native/unknown';

import { AFGPipeNetwork } from './AFGPipeNetwork';
import { AFGSubsystem } from './AFGSubsystem';

export interface AFGPipeSubsystem extends AFGSubsystem, Unknown<'IFGSaveInterface'> {
  /**
   * Map with all circuits and the circuit ID as the key.
   */
  mNetworks: Map<int32, AFGPipeNetwork>;
}
