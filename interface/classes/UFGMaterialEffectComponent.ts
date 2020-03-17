import { Unknown } from '../native/unknown';
import { FCachedMaterialArray } from '../structs/FCachedMaterialArray';

export interface UFGMaterialEffectComponent {
  /**
   * Meshes affected by the material effect.
   */
  mMeshes: Unknown<'UMeshComponent'>[];

  /**
   * Material to display.
   */
  mMaterial: Unknown<'UMaterialInterface'>;

  /**
   * Should this effect be auto destroyed on finish.
   */
  mAutoDestroy: boolean;

  /**
   * The cached mids we apply effects to.
   */
  mMids: Unknown<'UMaterialInstanceDynamic'>[];

  /**
   * The cached override materials present before initializing (Takes into account custom override materials on meshes)
   */
  mOverrideMaterials: FCachedMaterialArray[];
}
