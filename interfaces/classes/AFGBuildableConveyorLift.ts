import { UStaticMesh } from '../native/assets';
import { float } from '../native/primitive';
import { Unknown } from '../native/unknown';

import { AFGBuildableConveyorBase } from './AFGBuildableConveyorBase';

/**
 * Base for conveyor lifts.
 */
export interface AFGBuildableConveyorLift extends AFGBuildableConveyorBase {
  /**
   * What's the height of the meshes used.
   */
  mMeshHeight: float;

  /**
   * Mesh at the bottom of the lift.
   */
  mBottomMesh: UStaticMesh;

  /**
   * Mesh repeated for the mid section.
   */
  mMidMesh: UStaticMesh;

  /**
   * Mesh at the top of the lift.
   */
  mTopMesh: UStaticMesh;

  /**
   * Mesh placed on the input/output as a bellow between a wall or factory.
   */
  mBellowMesh: UStaticMesh;

  /**
   * Mesh placed between two joined lift sections.
   */
  mJointMesh: UStaticMesh;

  /**
   * Shelf placed under each item.
   */
  mShelfMesh: UStaticMesh;

  mTopTransform: Unknown<'FTransform'>;

  mIsReversed: boolean;

  /**
   * Meshes for items.
   */
  mItemMeshMap: Record<string, Unknown<'UInstancedStaticMeshComponent'>>;
}
