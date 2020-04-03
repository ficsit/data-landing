import { IFGFluidIntegrantInterface } from '../interfaces/IFGFluidIntegrantInterface';
import { float } from '../native/primitive';
import { classReference } from '../native/references';
import { Unknown } from '../native/unknown';
import { FFluidBox } from '../structs/FFluidBox';

import { AFGBuildableFactory } from './AFGBuildableFactory';
import { UFGItemDescriptor } from './UFGItemDescriptor';

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
  mPipeConnections: Unknown<'UFGPipeConnectionComponent'>[];

  mCachedFluidDescriptor: classReference<UFGItemDescriptor>;
}
