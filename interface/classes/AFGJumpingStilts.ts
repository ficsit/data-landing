import { float } from '../native/primitive';
import { Unknown } from '../native/unknown';

import { AFGEquipment } from './AFGEquipment';

export interface AFGJumpingStilts extends AFGEquipment {
  /**
   * The UCurveFloat to use to override the default fall damage curve
   */
  mFallDamageCurveOverride: Unknown<'UCurveFloat'>;

  /**
   * The factor by which the default sprint speed is multiplied while equipped
   */
  mSprintSpeedFactor: float;

  /**
   * The factor by which the default JumpZ is multiplied while equipped
   */
  mJumpSpeedFactor: float;
}
