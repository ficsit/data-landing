import { float } from '../native/primitive';
import { objectReference } from '../native/references';
import { Vector } from '../native/structs';
import { Unknown } from '../native/unknown';

import { UFGCircuitConnectionComponent } from './UFGCircuitConnectionComponent';

export interface AFGBuildableWire {
  /**
   * Maximum length a wire may be. [cm]
   */
  mMaxLength: float;

  /**
   * How much length we get per unit cost, 0 to disable per length cost. [cm]
   */
  mLengthPerCost: float;

  /**
   * Mesh used to visualize the power line
   */
  mWireMesh: Unknown<'UStaticMeshComponent'>;

  mConnections: objectReference<UFGCircuitConnectionComponent>;

  /**
   * The two locations this wire span.
   */
  mLocations: Vector;
}
