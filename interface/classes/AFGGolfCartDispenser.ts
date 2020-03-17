import { float } from '../native/primitive';
import { Unknown } from '../native/unknown';

import { AFGEquipment } from './AFGEquipment';

export interface AFGGolfCartDispenser extends AFGEquipment {
  /**
   * Trace distance when building. * /
   */
  mPlaceDistanceMax: float;

  /**
   * Material on hologram for valid placement.
   */
  mValidPlacementMaterial: Unknown<'UMaterialInstance'>;

  /**
   * Material on hologram for invalid placement.
   */
  mInvalidPlacementMaterial: Unknown<'UMaterialInstance'>;
}
