import { float } from '../native/primitive';

import { AFGEquipment } from './AFGEquipment';

export interface AFGParachute extends AFGEquipment {
  /**
   * The velocity we fall at using the parachute.
   */
  mTerminalVelocityZ: float;
}
