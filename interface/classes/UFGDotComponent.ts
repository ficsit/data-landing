import { AActor } from '../native/classes';
import { classReference } from '../native/references';

import { UFGDamageOverTime } from './UFGDamageOverTime';

export interface UFGDotComponent {
  /**
   * The dot we should apply to things in the primitive component we are attached to
   */
  mDotClass: classReference<UFGDamageOverTime>;

  /**
   * The actors we want to damage
   */
  mActorsToDamage: AActor[];
}
