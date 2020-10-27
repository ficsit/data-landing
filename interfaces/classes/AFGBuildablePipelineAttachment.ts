import { IFGFluidIntegrantInterface } from '../interfaces/IFGFluidIntegrantInterface';
import { float } from '../native/primitive';
import { classReference } from '../native/references';
import { FFluidBox } from '../structs/FFluidBox';

import { AFGBuildableFactory } from './AFGBuildableFactory';
import { UFGItemDescriptor } from './UFGItemDescriptor';
import { UFGPipeConnectionComponent } from './UFGPipeConnectionComponent';

export interface AFGBuildablePipelineAttachment extends AFGBuildableFactory, IFGFluidIntegrantInterface {
  /**
   * Radius of the pipes this connects too, used to approximate a volume.
   */
  mRadius: float;

  /**
   * Volume of the fluid box inside this attachment. [m3]
   */
  mFluidBoxVolume: float;

  /**
   * Fluid box belonging to this integrant
   */
  mFluidBox: FFluidBox;

  /**
   * Cached pipe connections from the blueprint.
   */
  mPipeConnections: UFGPipeConnectionComponent[];

  mCachedFluidDescriptor: classReference<UFGItemDescriptor>;
}
