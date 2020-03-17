import { classReference } from '../native/references';
import { Unknown } from '../native/unknown';

export interface UFGEnvQueryGenerator_ForAngle {
  /**
   * Total distance for point generation
   */
  mDistance: Unknown<'FAIDataProviderFloatValue'>;

  /**
   * Angle to generate points for
   */
  mAngle: Unknown<'FAIDataProviderFloatValue'>;

  mStepSize: Unknown<'FAIDataProviderFloatValue'>;

  /**
   * Should we also generate points for the negative angle value?
   */
  mGenerateMirroredPoints: Unknown<'FAIDataProviderBoolValue'>;

  /**
   * The actor (or actors) that will generate a cone in their facing direction
   */
  mCenterActor: classReference<Unknown<'UEnvQueryContext'>>;
}
