import { IFGSaveInterface } from '../interfaces/IFGSaveInterface';
import { int32 } from '../native/primitive';

import { AFGPipeNetwork } from './AFGPipeNetwork';
import { AFGSubsystem } from './AFGSubsystem';

export interface AFGPipeSubsystem extends AFGSubsystem, IFGSaveInterface {
  /**
   * Map with all circuits and the circuit ID as the key.
   */
  mNetworks: Record<int32, AFGPipeNetwork>;
}
