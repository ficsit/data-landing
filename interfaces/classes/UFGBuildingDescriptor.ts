import { classReference } from '../native/references';

import { AFGBuildable } from './AFGBuildable';
import { UFGBuildDescriptor } from './UFGBuildDescriptor';

export interface UFGBuildingDescriptor extends UFGBuildDescriptor {
  /**
   * The class to build.
   */
  mBuildableClass: classReference<AFGBuildable>;
}
