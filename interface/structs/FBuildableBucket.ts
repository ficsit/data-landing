import { AFGBuildable } from '../classes/AFGBuildable';
import { classReference } from '../native/references';

export interface FBuildableBucket {
  BuildableClass: classReference<AFGBuildable>;

  Buildables: AFGBuildable[];
}
