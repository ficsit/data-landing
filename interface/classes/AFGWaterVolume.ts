import { classReference } from '../native/references';
import { Unknown } from '../native/unknown';

import { UFGResourceDescriptor } from './UFGResourceDescriptor';
import { UFGSharedPostProcessSettings } from './UFGSharedPostProcessSettings';
import { UFGWaterAudio } from './UFGWaterAudio';

export interface AFGWaterVolume {
  /**
   * Specify what typ of nav area blocker this is ( defaults to null )
   */
  mAreaClass: classReference<Unknown<'UNavArea'>>;

  /**
   * Audio settings for the this water volume
   */
  mWaterAudio: classReference<UFGWaterAudio>;

  mCanPlaceExtractor: boolean;

  /**
   * A template of settings for our post process settings
   */
  mPostProcessSettings: classReference<UFGSharedPostProcessSettings>;

  /**
   * Old deprecated data that isn't used anymore, but we want to be sure that the post process volumes will be deleted
   */
  mAssociatedPostProcessVolume_DEPRECATED: Unknown<'APostProcessVolume'>;

  /**
   * Reference to the Water Descriptor specified in FGResourceSettings. Assigned in begin play
   */
  mResourceClass: classReference<UFGResourceDescriptor>;
}
