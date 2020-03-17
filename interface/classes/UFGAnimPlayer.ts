import { EArmEquipment } from '../enums/EArmEquipment';
import { EBackEquipment } from '../enums/EBackEquipment';

import { AFGCharacterPlayer } from './AFGCharacterPlayer';

export interface UFGAnimPlayer {
  /**
   * Is first or third person mesh?
   */
  mIsFirstPerson: boolean;

  /**
   * Saved value of arm equipment
   */
  mArmSlotType: EArmEquipment;

  /**
   * Saved value of back equipment
   */
  mBacklotType: EBackEquipment;

  /**
   * Character this anim belongs to
   */
  mCharacter: AFGCharacterPlayer;
}
