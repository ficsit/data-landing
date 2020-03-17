import { classReference } from '../native/references';

import { UFGItemDescriptor } from './UFGItemDescriptor';

export interface UFGItemPickedUpDependency {
  /**
   * The items that should have been picked up for this dependency to be met
   */
  mItems: classReference<UFGItemDescriptor>[];

  /**
   * Do we need to have picked up all of the items to or is it enough with just one of them
   */
  mRequireAllItemsToBePickedUp: boolean;
}
