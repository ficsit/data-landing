import { UStaticMesh } from '../native/assets';
import { float, int32 } from '../native/primitive';
import { classReference } from '../native/references';
import { Unknown } from '../native/unknown';

import { AFGPipelineSupportHologram } from './AFGPipelineSupportHologram';
import { AFGSplineHologram } from './AFGSplineHologram';
import { UFGPipeConnectionComponentBase } from './UFGPipeConnectionComponentBase';
import { UFGRecipe } from './UFGRecipe';

export interface AFGPipelineHologram extends AFGSplineHologram {
  /**
   * Used to redirect input and construct poles when needed
   */
  mChildPoleHologram: AFGPipelineSupportHologram;

  /**
   * The two connection components for this pipeline.
   */
  mConnectionComponents: UFGPipeConnectionComponentBase;

  /**
   * The connections we've made.
   */
  mSnappedConnectionComponents: UFGPipeConnectionComponentBase;

  /**
   * Class of conveyor pole to place at the end.
   */
  mDefaultPipelineSupportRecipe: classReference<UFGRecipe>;

  /**
   * What radius will the bends have.
   */
  mBendRadius: float;

  /**
   * What radius will the bends have in the 2D mode AKA conveyor mode. Should be in sync with conveyors.
   * @TODO:[DavalliusA:Sun/08-12-2019] should we make something here that can check itself against conveyors to let designers know?
   */
  mBendRadius2D: float;

  /**
   * The minimum allowed bend radius before the shape get's invalid
   */
  mMinBendRadius: float;

  /**
   * Maximum number of meshes per pipe
   */
  mMaxLength: int32;

  /**
   * Arrow to indicate the direction of the conveyor while placing it.
   */
  mConnectionArrowComponent: Unknown<'UStaticMeshComponent'>;

  /**
   * All the generated spline meshes.
   */
  mSplineMeshes: Unknown<'USplineMeshComponent'>[];

  /**
   * All the generated collision meshes.
   */
  mCollisionMeshes: Unknown<'UShapeComponent'>[];

  /**
   * Cached from the default buildable.
   */
  mMesh: UStaticMesh;
}
