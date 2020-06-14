import { UMaterialInstance } from '../native/assets';
import { float } from '../native/primitive';

import { AFGEquipment } from './AFGEquipment';

export interface AFGGolfCartDispenser extends AFGEquipment {
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
