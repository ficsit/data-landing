import { AFGBuildableConveyorBase } from './AFGBuildableConveyorBase';
import { AFGBuildableFactory } from './AFGBuildableFactory';
import { AFGBuildablePipeBase } from './AFGBuildablePipeBase';

export interface UFGSignificanceManager {
  /**
   * Is the manager enabled
   */
  mIsEnabled: boolean;

  /**
   * List of factories that were significant last time we checked
   */
  mPreviousSignificantFactories: AFGBuildableFactory[];

  /**
   * List of conveyor bases (belts and lifts) that were significant last time we checked
   */
  mPreviousSignificantConveyorBases: AFGBuildableConveyorBase[];

  /**
   * List of pipelines that were significant last time we checked
   */
  mPreviousSignificantPipelines: AFGBuildablePipeBase[];
}
