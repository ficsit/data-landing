import { int32 } from '../native/primitive';

export interface AFGBuildableConverter {
  /**
   * Number of ingredients needed to consume to produce
   */
  mNumberOfIngredientsNeeded: int32;
}
