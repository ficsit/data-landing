import { float } from '../native/primitive';

import { AFGEquipment } from './AFGEquipment';
import { UFGCharacterMovementComponent } from './UFGCharacterMovementComponent';

export interface AFGParachute extends AFGEquipment {
  /**
   * The velocity we fall at using the parachute.
   */
  mTerminalVelocityZ: float;

  /**
   * If we are actually deployed or not
   */
  mIsDeployed: boolean;

  /**
   * A cached instance of the instigators movement
   */
  mCachedMovementComponent: UFGCharacterMovementComponent;
}
