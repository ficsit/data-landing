import { float, int32 } from '../native/primitive';
import { Unknown } from '../native/unknown';
import { FSignData } from '../structs/FSignData';
import { FSignElementConstraints } from '../structs/FSignElementConstraints';

import { UFGColoredInstanceMeshProxy } from './UFGColoredInstanceMeshProxy';

export interface AFGBuildableStandaloneSign {
  /**
   * Map of Element Ids to their associated component
   */
  mDataToComponentMap: Record<int32, Unknown<'USceneComponent'>>;

  /**
   * Root Component that holds all the sign elements, text, mesh etc.
   */
  mSignDisplayRoot: Unknown<'USceneComponent'>;

  /**
   * Root component that parents the text objects
   */
  mTextDisplayRoot: Unknown<'USceneComponent'>;

  mMeshComponentProxy: UFGColoredInstanceMeshProxy;

  /**
   * Bounding box used to cull text mesh. Is assign to the BoundedTextRenderComponents
   */
  mBoundingBox: Unknown<'UBoxComponent'>;

  /**
   * The size of each grid square on the this sign
   */
  mGridSquareDimensions: Unknown<'FVector2D'>;

  /**
   * Particle system visual
   */
  mHologramParticleComponent: Unknown<'UParticleSystemComponent'>;

  /**
   * Distance at which to gain significance
   */
  mGainSignificanceDistance: float;

  mSignConstraints: FSignElementConstraints;

  mSignFont: Unknown<'UFont'>;

  mBackgroundGridSize: int32;

  mSignData: FSignData;
}
