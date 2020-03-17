import { AActor } from '../native/classes';
import { float } from '../native/primitive';
import { classReference } from '../native/references';

import { UFGDamageType } from './UFGDamageType';

export interface UFGDamageOverTime {
  /**
   * How often should we damage actors inside of this cloud (in seconds)
   */
  mDamageInterval: float;

  /**
   * How much damage should the actor take each time it receives damage
   */
  mDamageAmount: float;

  /**
   * What type of damage should we give the character
   */
  mDamageClass: classReference<UFGDamageType>;

  /**
   * Only deal damage to subclasses of these actor classes
   */
  mActorFilter: classReference<AActor>[];
}
