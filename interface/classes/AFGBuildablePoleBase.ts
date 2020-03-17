import { float } from '../native/primitive';

export interface AFGBuildablePoleBase {
  /**
   * Can this pole stack.
   */
  mCanStack: boolean;

  /**
   * Height between two stacked poles excluding the poles height.
   */
  mStackHeight: float;
}
