import { EArmEquipment } from '../enums/EArmEquipment';
import { EBackEquipment } from '../enums/EBackEquipment';
import { EEquipmentSlot } from '../enums/EEquipmentSlot';
import { int32 } from '../native/primitive';
import { classReference } from '../native/references';
import { Vector } from '../native/structs';

import { AFGCharacterPlayer } from './AFGCharacterPlayer';
import { AFGEquipment } from './AFGEquipment';

export interface AFGEquipmentAttachment {
  /**
   * The class of the equipment that spawned this attachment
   */
  mEquipmentClass: classReference<AFGEquipment>;

  /**
   * This value get replicated to clients so they can play effect
   */
  mUseLocation: Vector;

  /**
   * If this equipment should attach to a socket, this is the socket.
   */
  mAttachSocket: string;

  /**
   * Arms animation this should play on the when the equipment is equipped (only used if mEquipmentSlot == ES_ARMS)
   */
  mArmAnimation: EArmEquipment;

  /**
   * Arms animation this should play on the when the equipment is equipped (only used if mEquipmentSlot == ES_BACK)
   */
  mBackAnimation: EBackEquipment;

  /**
   * The character this is attached to.
   */
  mAttachedTo: AFGCharacterPlayer;

  /**
   * To what slot is this attachment attached
   */
  mEquipmentSlot: EEquipmentSlot;

  /**
   * integer used for animation states
   */
  mAnimationState: int32;
}
