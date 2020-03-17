import { AFGEquipment } from './AFGEquipment';

export interface AFGEquipmentChild {
  /**
   * stores a reference to the FGEquipment that spawned this class
   */
  mParentEquipment: AFGEquipment;

  /**
   * The socket to attach any child equipment to
   */
  mAttachSocket: string;
}
