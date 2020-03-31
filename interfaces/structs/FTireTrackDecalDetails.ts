import { Unknown } from '../native/unknown';

export interface FTireTrackDecalDetails {
  /**
   * Surface material to override for
   */
  SurfacePhysicsMaterial: Unknown<'UPhysicalMaterial'>;

  /**
   * Material to use as an override
   */
  DecalMaterialOverride: Unknown<'UMaterial'>;
}
