import { FMaterialAndSlotName } from '../structs/FMaterialAndSlotName';

import { AFGEquipment } from './AFGEquipment';

export interface AFGSuitBase extends AFGEquipment {
  mSuit1PMeshMaterials: FMaterialAndSlotName[];
}
