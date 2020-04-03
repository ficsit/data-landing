import { float } from '../native/primitive';
import { Unknown } from '../native/unknown';
import { FPoleHeightMesh } from '../structs/FPoleHeightMesh';

import { AFGFactoryHologram } from './AFGFactoryHologram';

export interface AFGPoleHologram extends AFGFactoryHologram {
  /**
   * The most fitting mesh for our aim height.
   */
  mPoleMesh: FPoleHeightMesh;

  /**
   * The pole mesh.
   */
  mPoleMeshComponent: Unknown<'UStaticMeshComponent'>;

  /**
   * The scene component for adjusting the height of the pole.
   */
  mPoleHeightComponent: Unknown<'USceneComponent'>;

  mPoleHeight: float;
}
