import { classReference } from '../native/references';

import { AFGEquipment } from './AFGEquipment';

export interface UFGEquipmentDescriptor {
  /**
   * The equipment that is linked to this descriptor.
   */
  mEquipmentClass: classReference<AFGEquipment>;
}
