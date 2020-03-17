import { float } from '../native/primitive';

import { AFGBuildableFactoryBuilding } from './AFGBuildableFactoryBuilding';

export interface AFGBuildableFloor extends AFGBuildableFactoryBuilding {
  /**
   * Size of the floor, width and depth.
   */
  mSize: float;
}
