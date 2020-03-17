import { Unknown } from '../native/unknown';

import { AFGBuildableHologram } from './AFGBuildableHologram';

export interface AFGFactoryBuildingHologram extends AFGBuildableHologram {
  mBuildingMesh: Unknown<'UStaticMeshComponent'>;
}
