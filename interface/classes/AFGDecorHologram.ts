import { UStaticMesh } from '../native/assets';

import { AFGBuildableHologram } from './AFGBuildableHologram';

export interface AFGDecorHologram extends AFGBuildableHologram {
  /**
   * The mesh we want to set to our decor to
   */
  mDecorMesh: UStaticMesh;
}
