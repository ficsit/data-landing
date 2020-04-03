import { UStaticMesh } from '../native/assets';
import { float } from '../native/primitive';
import { Unknown } from '../native/unknown';

import { AFGBuildablePoleBase } from './AFGBuildablePoleBase';
import { UFGColoredInstanceMeshProxy } from './UFGColoredInstanceMeshProxy';

export interface AFGBuildablePipelineSupport extends AFGBuildablePoleBase {
  /**
   * This supports length.
   */
  mLength: float;

  /**
   * This supports length.
   */
  mVerticalAngle: float;

  /**
   * The component we want to use with the support
   */
  mSupportComponentDefaultMesh: UFGColoredInstanceMeshProxy;

  /**
   * OST BE SET FROM CONSTRUCTION SCRIPT OR IT WILL BE NULL!
   */
  mSnapOnly0: Unknown<'UFGPipeConnectionComponentBase'>;

  /**
   * The scene component for adjusting the length of the support.
   */
  mSupportLengthComponent: Unknown<'USceneComponent'>;

  /**
   * Static mesh to use when rendering
   */
  mSupportMesh: UStaticMesh;

  /**
   * Should the stack height only be calculated using the mStackHeight?
   */
  mUseStaticHeight: boolean;
}
