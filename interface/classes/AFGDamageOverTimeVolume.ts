import { classReference } from '../native/references';
import { Unknown } from '../native/unknown';

import { UFGDotComponent } from './UFGDotComponent';
import { UFGSharedPostProcessSettings } from './UFGSharedPostProcessSettings';

export interface AFGDamageOverTimeVolume extends Unknown<'AVolume'>, Unknown<'IInterface_PostProcessVolume'> {
  /**
   * Some damage over time volumes will want a post process effect attached to it
   */
  mPostProcessSettings: classReference<UFGSharedPostProcessSettings>;

  /**
   * The component that will do the damage to actors
   */
  mDotComponent: UFGDotComponent;
}
