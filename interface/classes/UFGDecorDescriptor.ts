import { UStaticMesh } from '../native/assets';

import { UFGBuildingDescriptor } from './UFGBuildingDescriptor';

export interface UFGDecorDescriptor extends UFGBuildingDescriptor {
  /**
   * The static mesh for the decor.
   */
  mDecorMesh: UStaticMesh;
}
