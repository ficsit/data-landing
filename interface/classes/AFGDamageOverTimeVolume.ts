import { classReference } from '../native/references';

import { UFGDotComponent } from './UFGDotComponent';
import { UFGSharedPostProcessSettings } from './UFGSharedPostProcessSettings';

export interface AFGDamageOverTimeVolume {
  /**
   * Some damage over time volumes will want a post process effect attached to it
   */
  mPostProcessSettings: classReference<UFGSharedPostProcessSettings>;

  /**
   * The component that will do the damage to actors
   */
  mDotComponent: UFGDotComponent;
}
