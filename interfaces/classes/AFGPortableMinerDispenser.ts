import { EResourceForm } from '../enums/EResourceForm';
import { UMaterialInstance } from '../native/assets';
import { float } from '../native/primitive';

import { AFGEquipment } from './AFGEquipment';

export interface AFGPortableMinerDispenser extends AFGEquipment {
  /**
   * What form can the overlapping resources be in.
   */
  mAllowedResourceForms: EResourceForm[];

  /**
   * Trace distance when building. * /
   */
  mPlaceDistanceMax: float;

  /**
   * Material on hologram for valid placement.
   */
  mValidPlacementMaterial: UMaterialInstance;

  /**
   * Material on hologram for invalid placement.
   */
  mInvalidPlacementMaterial: UMaterialInstance;
}
