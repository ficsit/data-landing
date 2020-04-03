import { Unknown } from '../native/unknown';

import { AFGBuildablePipeline } from './AFGBuildablePipeline';

export interface UFGPipelineFlowIndicatorComponent extends Unknown<'UStaticMeshComponent'> {
  /**
   * Pipeline we indicate status for.
   */
  mPipeline: AFGBuildablePipeline;
}
