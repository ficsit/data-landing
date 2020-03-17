import { UObject } from '../native/classes';
import { localized } from '../native/primitive';
import { classReference } from '../native/references';

import { UFGMapAreaZoneDescriptor } from './UFGMapAreaZoneDescriptor';

export interface UFGMapArea extends UObject {
  /**
   * This is the name we at CSS gave this area
   */
  mDisplayName: localized;

  /**
   * What kind of zone this is
   */
  mZoneType: classReference<UFGMapAreaZoneDescriptor>;

  /**
   * This is the name the player has given this area
   */
  mUserSetDisplayName: localized;
}
