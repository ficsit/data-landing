import { EFactoryConnectionDirection } from '../enums/EFactoryConnectionDirection';
import { UStaticMesh } from '../native/assets';
import { float } from '../native/primitive';
import { classReference } from '../native/references';
import { Rotator, Vector } from '../native/structs';
import { Unknown } from '../native/unknown';

import { AFGBuildableConveyorBelt } from './AFGBuildableConveyorBelt';
import { AFGConveyorPoleHologram } from './AFGConveyorPoleHologram';
import { AFGSplineHologram } from './AFGSplineHologram';
import { UFGFactoryConnectionComponent } from './UFGFactoryConnectionComponent';
import { UFGRecipe } from './UFGRecipe';

export interface AFGConveyorBeltHologram extends AFGSplineHologram {
  /**
   * Used to redirect input and construct poles when needed
   */
  mChildPoleHologram: AFGConveyorPoleHologram;

  /**
   * The two connection components for this conveyor.
   */
  mConnectionComponents: UFGFactoryConnectionComponent;

  /**
   * The connections we've made.
   */
  mSnappedConnectionComponents: UFGFactoryConnectionComponent;

  /**
   * If we upgrade another conveyor belt this is the belt we replaces.
   */
  mUpgradedConveyorBelt: AFGBuildableConveyorBelt;

  /**
   * Class of conveyor pole to place at the end.
   */
  mDefaultConveyorPoleRecipe: classReference<UFGRecipe>;

  /**
   * What radius will the bends have.
   */
  mBendRadius: float;

  /**
   * What is the maximum length of one segment.
   */
  mMaxSplineLength: float;

  /**
   * What is the maximum incline of the conveyor belt (degrees).
   */
  mMaxIncline: float;

  /**
   * Used to replicate the direction arrow.
   */
  mConnectionArrowComponentDirection: EFactoryConnectionDirection;

  /**
   * Arrow to indicate the direction of the conveyor while placing it.
   */
  mConnectionArrowComponent: Unknown<'UStaticMeshComponent'>;

  mConstructionPoleLocations: Vector;

  mConstructionPoleRotations: Rotator;

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
