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
   * Fluid Box volume scale. WIll multiply the determined volume by this scalar ( useful if the object is physically smaller than its desired volume )
   */
  mFluidBoxVolumeScale: float;

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
