import { AActor } from '../native/classes';
import { float } from '../native/primitive';
import { classReference } from '../native/references';
import { Unknown } from '../native/unknown';

export interface AFGC4Explosive extends AActor {
  /**
   * Base damage used for the radial apply damage
   */
  mBaseDamage: float;

  /**
   * Damage radius used for the radial apply damage
   */
  mDamageRadius: float;

  /**
   * Damage type used for the radial apply damage
   */
  mDamageType: classReference<Unknown<'UDamageType'>>;

  /**
   * Tells client to blow this shit up
   */
  mIsDetonated: boolean;
}
