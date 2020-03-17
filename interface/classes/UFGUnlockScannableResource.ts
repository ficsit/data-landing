import { classReference } from '../native/references';

import { UFGResourceDescriptor } from './UFGResourceDescriptor';

export interface UFGUnlockScannableResource {
  /**
   * These are the resources that are scannable after this unlock
   */
  mResourcesToAddToScanner: classReference<UFGResourceDescriptor>[];
}
