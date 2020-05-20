import { int32 } from '../native/primitive';
import { Unknown } from '../native/unknown';

import { AFGSubsystem } from './AFGSubsystem';
import { UFGCircuit } from './UFGCircuit';

export interface AFGCircuitSubsystem extends AFGSubsystem, Unknown<'IFGSaveInterface'> {
  /**
   * Map with all circuits and the circuit ID as the key.
   */
  mCircuits: Map<int32, UFGCircuit>;

  /**
   * @todo There is no support for TMap replication, fix something better than this.
   */
  mReplicatedCircuits: UFGCircuit[];
}
