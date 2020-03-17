import { float } from '../native/primitive';
import { Unknown } from '../native/unknown';
import { FPoleHeightMesh } from '../structs/FPoleHeightMesh';

import { UFGPipeConnectionComponentBase } from './UFGPipeConnectionComponentBase';

export interface AFGPipelineSupportHologram {
  /**
   * The most fitting mesh for our aim height.
   */
  mSupportMesh: FPoleHeightMesh;

  /**
   * if you should be able to adjust the vrticale direction of the connection and top part of the pole
   */
  mCanAdjustVerticalAngle: boolean;

  /**
   * The connection conveyors snap to, used when placing a support automatically.
   */
  mSnapConnection: UFGPipeConnectionComponentBase;

  /**
   * Used to rotate the connection and top part vetically
   */
  mVerticalAngle: float;

  /**
   * The support mesh.
   */
  mSupportMeshComponent: Unknown<'UStaticMeshComponent'>;

  /**
   * The support mesh.
   */
  mSupportTopPartMeshComponent: Unknown<'UStaticMeshComponent'>;

  /**
   * The scene component for adjusting the length of the support.
   */
  mSupportLengthComponent: Unknown<'USceneComponent'>;
}
