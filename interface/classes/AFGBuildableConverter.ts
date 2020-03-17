import { int32 } from '../native/primitive';

import { AFGBuildableManufacturer } from './AFGBuildableManufacturer';

export interface AFGBuildableConverter extends AFGBuildableManufacturer {
  /**
   * Number of ingredients needed to consume to produce
   */
  mNumberOfIngredientsNeeded: int32;
}
