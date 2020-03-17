import { FPoleHeightMesh } from '../structs/FPoleHeightMesh';

import { UFGBuildingDescriptor } from './UFGBuildingDescriptor';

export interface UFGPoleDescriptor extends UFGBuildingDescriptor {
  /**
   * Array with meshes and their heights for the pole.
   */
  mHeightMeshes: FPoleHeightMesh[];
}
