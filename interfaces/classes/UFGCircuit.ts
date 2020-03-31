import { UObject } from '../native/classes';
import { int32, uint8 } from '../native/primitive';
import { Unknown } from '../native/unknown';

import { AFGCharacterPlayer } from './AFGCharacterPlayer';
import { UFGCircuitConnectionComponent } from './UFGCircuitConnectionComponent';

export interface UFGCircuit extends UObject, Unknown<'IFGSaveInterface'> {
  /**
   * The id used to identify this circuit.
   */
  mCircuitID: int32;

  /**
   * List of all the components (nodes) in this circuit.
   */
  mComponents: UFGCircuitConnectionComponent[];

  /**
   * Do this circuit needs to be rebuilt, e.g. wires or components have been removed.
   */
  mNeedFullRebuild: uint8;

  /**
   * True if this circuit has changed.
   */
  mHasChanged: uint8;

  /**
   * All players interacting with a building that's connected to this circuit
   */
  mInteractingPlayers: AFGCharacterPlayer[];
}
