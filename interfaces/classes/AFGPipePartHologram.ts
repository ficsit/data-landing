import { Unknown } from '../native/unknown';
import { FPoleHeightMesh } from '../structs/FPoleHeightMesh';

import { AFGFactoryHologram } from './AFGFactoryHologram';
import { UFGPipeConnectionComponentBase } from './UFGPipeConnectionComponentBase';

export interface AFGPipePartHologram extends AFGFactoryHologram {
  /**
   * The most fitting mesh for our aim height.
   */
  mSupportMesh: FPoleHeightMesh;

  /**
   * The connection conveyors snap to, used when placing a support automatically.
   */
  mSnapConnection: UFGPipeConnectionComponentBase;

  /**
   * The support mesh.
   */
  mSupportMeshComponent: Unknown<'UStaticMeshComponent'>;

  /**
   * The scene component for adjusting the length of the support.
   */
  mSupportLengthComponent: Unknown<'USceneComponent'>;
}
