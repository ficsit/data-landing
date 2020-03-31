import { float } from '../native/primitive';
import { Unknown } from '../native/unknown';

import { AFGCharacterPlayer } from './AFGCharacterPlayer';

export interface UFGLadderComponent extends Unknown<'UBoxComponent'> {
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
