import { UStaticMesh } from '../native/assets';

import { AFGBuildable } from './AFGBuildable';

export interface AFGBuildableDecor extends AFGBuildable {
  /**
   * The mesh we want to have for the decor
   */
  mDecorMesh: UStaticMesh;
}
