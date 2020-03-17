import { float } from '../native/primitive';

import { AFGBuildable } from './AFGBuildable';

export interface AFGBuildablePoleBase extends AFGBuildable {
  /**
   * Can this pole stack.
   */
  mCanStack: boolean;

  /**
   * Height between two stacked poles excluding the poles height.
   */
  mStackHeight: float;
}
