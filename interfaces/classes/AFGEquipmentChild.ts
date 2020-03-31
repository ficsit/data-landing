import { AActor } from '../native/classes';

import { AFGEquipment } from './AFGEquipment';

export interface AFGEquipmentChild extends AActor {
  /**
   * stores a reference to the FGEquipment that spawned this class
   */
  mParentEquipment: AFGEquipment;

  /**
   * The socket to attach any child equipment to
   */
  mAttachSocket: string;
}
