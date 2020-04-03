import { classReference } from '../native/references';
import { Unknown } from '../native/unknown';

import { UFGItemDescriptor } from './UFGItemDescriptor';

export interface UFGEnvQueryTest_ItemDescription extends Unknown<'UEnvQueryTest'> {
  /**
   * Class of what descriptor we are looking for
   */
  mItemDescriptorClass: classReference<UFGItemDescriptor>;
}
