import { float } from '../native/primitive';

import { AFGCharacterPlayer } from './AFGCharacterPlayer';

export interface UFGLadderComponent {
  /**
   * Climbable angle in degrees. The player must be looking and moving within this angle relative to the ladder to climb it.
   */
  mClimbableLookAngle: float;

  /**
   * Angle in degrees. If the player must be looking and moving within this angle relative to the ladder or else they will hop off.
   */
  mEndClimbingLookAngle: float;

  mPotentialClimbers: AFGCharacterPlayer[];
}
