import { float } from '../native/primitive';

import { AFGEquipment } from './AFGEquipment';

export interface AFGJetPack extends AFGEquipment {
  /**
   * The duration we've held down thrust this flight, only resets when Landed
   */
  mJumpTimeStamp: float;

  /**
   * If we are actually thrusting or not
   */
  mIsThrusting: boolean;
}
