import { float } from '../native/primitive';
import { Unknown } from '../native/unknown';

import { AFGEquipment } from './AFGEquipment';

export interface AFGHookshot extends AFGEquipment {
  /**
   * How far we will trace to try and find something to attach to
   */
  mMaxHookDistance: float;

  /**
   * How fast do we accellerate toward the grappled target.
   */
  mAccelRate: float;

  /**
   * Accel bonus added when we are moving away from the grappled target.
   */
  mBrakeAccelRate: float;

  /**
   * Component handling our hookshot sounds
   */
  mHookshotAudio: Unknown<'UAkComponent'>;
}
