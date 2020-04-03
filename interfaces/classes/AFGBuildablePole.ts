import { UStaticMesh } from '../native/assets';
import { float } from '../native/primitive';
import { Unknown } from '../native/unknown';

import { AFGBuildablePoleBase } from './AFGBuildablePoleBase';
import { UFGColoredInstanceMeshProxy } from './UFGColoredInstanceMeshProxy';

export interface AFGBuildablePole extends AFGBuildablePoleBase {
  /**
   * This poles height.
   */
  mHeight: float;

  /**
   * The component we want to use with the pole
   */
  mPoleComponentProxy: UFGColoredInstanceMeshProxy;

  /**
   * Connection component used
   */
  mSnapOnly0: Unknown<'UFGFactoryConnectionComponent'>;

  /**
   * This poles mesh. @save 2018-10-24, this is here so old poles < alpha 2 path will still have a correct mesh, resaving an old save
   */
  mPoleMesh: UStaticMesh;

  /**
   * Should the stack height only be calculated using the mStackHeight?
   */
  mUseStaticHeight: boolean;
}
