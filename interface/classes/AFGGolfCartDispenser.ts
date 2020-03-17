import { float } from '../native/primitive';
import { Unknown } from '../native/unknown';

export interface AFGGolfCartDispenser {
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
