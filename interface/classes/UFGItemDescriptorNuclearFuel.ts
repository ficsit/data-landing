import { int32 } from '../native/primitive';
import { classReference } from '../native/references';

import { UFGItemDescriptor } from './UFGItemDescriptor';

export interface UFGItemDescriptorNuclearFuel {
  /**
   * The descriptor to use when the fuel is removed from the reactor (waste).
   */
  mSpentFuelClass: classReference<UFGItemDescriptor>;

  /**
   * How much waste to produce
   */
  mAmountOfWaste: int32;
}
