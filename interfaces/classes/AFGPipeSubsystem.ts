import { IFGSaveInterface } from '../interfaces/IFGSaveInterface';
import { int32 } from '../native/primitive';

import { AFGPipeNetwork } from './AFGPipeNetwork';
import { AFGSubsystem } from './AFGSubsystem';

export interface AFGPipeSubsystem extends AFGSubsystem, IFGSaveInterface {
  /**
   * Map with all circuits and the circuit ID as the key.
   */
  mNetworks: Map<int32, AFGPipeNetwork>;

  /**
   * List of networks to show debug for, if empty all networks are displayed.
   */
  mDisplayDebugNetworkList: AFGPipeNetwork[];
}
