import { UStaticMesh } from '../native/assets';
import { Unknown } from '../native/unknown';

import { AFGBuildableHologram } from './AFGBuildableHologram';

export interface AFGFactoryHologram extends AFGBuildableHologram {
  /**
   * Mesh component used to display the clearance mesh
   */
  mClearanceMeshComponent: Unknown<'UStaticMeshComponent'>;

  /**
   * Mesh we want to use in the component
   */
  mClearanceMesh: UStaticMesh;

  /**
   * Material to use on the clearance component
   */
  mClearanceMaterial: Unknown<'UMaterialInterface'>;
}
