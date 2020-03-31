import { UStaticMesh } from '../native/assets';
import { float } from '../native/primitive';
import { Unknown } from '../native/unknown';

import { AFGBuildableFactory } from './AFGBuildableFactory';
import { UFGColoredInstanceMeshProxy } from './UFGColoredInstanceMeshProxy';

export interface AFGBuildablePipePart extends AFGBuildableFactory {
  /**
   * This supports length.
   */
  mLength: float;

  /**
   * Can this support stack.
   */
  mCanStack: boolean;

  /**
   * Height between two stacked supports excluding the poles height.
   */
  mStackHeight: float;

  /**
   * The component we want to use with the support
   */
  mSupportComponentDefaultMesh: UFGColoredInstanceMeshProxy;

  /**
   * OST BE SET FROM CONSTRUCTION SCRIPT OR IT WILL BE NULL!
   */
  mConnection0: Unknown<'UFGPipeConnectionComponentBase'>;

  /**
   * Static mesh to use when rendering
   */
  mSupportMesh: UStaticMesh;

  /**
   * Should the stack height only be calculated using the mStackHeight?
   */
  mUseStaticHeight: boolean;
}
