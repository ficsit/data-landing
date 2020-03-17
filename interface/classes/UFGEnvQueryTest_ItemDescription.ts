import { classReference } from '../native/references';

import { UFGItemDescriptor } from './UFGItemDescriptor';

export interface UFGEnvQueryTest_ItemDescription {
  /**
   * Class of what descriptor we are looking for
   */
  mItemDescriptorClass: classReference<UFGItemDescriptor>;
}
