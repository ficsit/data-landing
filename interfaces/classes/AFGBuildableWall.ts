import { float } from '../native/primitive';

import { AFGBuildableFactoryBuilding } from './AFGBuildableFactoryBuilding';

export interface AFGBuildableWall extends AFGBuildableFactoryBuilding {
  /**
   * Width of the wall
   */
  mWidth: float;

  /**
   * Height of the wall
   */
  mHeight: float;
}
