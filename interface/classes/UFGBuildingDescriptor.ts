import { classReference } from '../native/references';

import { AFGBuildable } from './AFGBuildable';

export interface UFGBuildingDescriptor {
  /**
   * The class to build.
   */
  mBuildableClass: classReference<AFGBuildable>;
}
