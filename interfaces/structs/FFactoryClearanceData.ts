import { AFGBuildableFactory } from '../classes/AFGBuildableFactory';
import { Unknown } from '../native/unknown';

import { FConnectionRepresentation } from './FConnectionRepresentation';

export interface FFactoryClearanceData {
  Factory: AFGBuildableFactory;

  ClearanceComponent: Unknown<'UStaticMeshComponent'>;

  mConnectionComponents: FConnectionRepresentation[];
}
