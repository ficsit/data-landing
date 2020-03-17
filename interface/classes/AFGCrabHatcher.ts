import { float } from '../native/primitive';

import { AFGEnemy } from './AFGEnemy';

export interface AFGCrabHatcher extends AFGEnemy {
  /**
   * Indicates if a threat is nearby
   */
  mThreatNearby: boolean;

  /**
   * Have crabs been spawned?
   */
  mDidSpawnCrabs: boolean;

  /**
   * Time enemy has been under threat
   */
  mThreatTimer: float;

  /**
   * Time when timer reach it's end
   */
  mThreatTimerMax: float;
}
