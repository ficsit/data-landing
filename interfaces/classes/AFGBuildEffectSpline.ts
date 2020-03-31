import { AActor } from '../native/classes';

import { AFGPipeBuilderTrail } from './AFGPipeBuilderTrail';

export interface AFGBuildEffectSpline extends AActor {
  /**
   * Attachment for this effect, can be null
   */
  mAttachment: AFGPipeBuilderTrail;
}
