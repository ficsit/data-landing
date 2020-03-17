import { AActor } from '../native/classes';
import { classReference } from '../native/references';
import { Unknown } from '../native/unknown';

import { UFGDamageOverTime } from './UFGDamageOverTime';

export interface UFGDotComponent extends Unknown<'USceneComponent'> {
  /**
   * The dot we should apply to things in the primitive component we are attached to
   */
  mDotClass: classReference<UFGDamageOverTime>;

  /**
   * The actors we want to damage
   */
  mActorsToDamage: AActor[];
}
