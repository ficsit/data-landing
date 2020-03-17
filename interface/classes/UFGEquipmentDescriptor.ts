import { classReference } from '../native/references';

import { AFGEquipment } from './AFGEquipment';
import { UFGItemDescriptor } from './UFGItemDescriptor';

export interface UFGEquipmentDescriptor extends UFGItemDescriptor {
  /**
   * The equipment that is linked to this descriptor.
   */
  mEquipmentClass: classReference<AFGEquipment>;
}
