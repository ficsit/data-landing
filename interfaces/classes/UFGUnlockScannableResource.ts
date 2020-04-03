import { classReference } from '../native/references';

import { UFGResourceDescriptor } from './UFGResourceDescriptor';
import { UFGUnlock } from './UFGUnlock';

export interface UFGUnlockScannableResource extends UFGUnlock {
  /**
   * These are the resources that are scannable after this unlock
   */
  mResourcesToAddToScanner: classReference<UFGResourceDescriptor>[];
}
