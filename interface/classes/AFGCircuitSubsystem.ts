import { IFGSaveInterface } from '../interfaces/IFGSaveInterface';
import { int32 } from '../native/primitive';

import { AFGSubsystem } from './AFGSubsystem';
import { UFGCircuit } from './UFGCircuit';

export interface AFGCircuitSubsystem extends AFGSubsystem, IFGSaveInterface {
  /**
   * Map with all circuits and the circuit ID as the key.
   */
  mCircuits: Record<int32, UFGCircuit>;

  /**
   * @todo There is no support for TMap replication, fix something better than this.
   */
  mReplicatedCircuits: UFGCircuit[];
}
