import { FMaterialAndSlotName } from '../structs/FMaterialAndSlotName';

import { AFGEquipmentAttachment } from './AFGEquipmentAttachment';

export interface AFGSuitBaseAttachment extends AFGEquipmentAttachment {
  mSuit3PMeshMaterials: FMaterialAndSlotName[];
}
