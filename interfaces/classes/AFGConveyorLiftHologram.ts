import { UStaticMesh } from '../native/assets';
import { Unknown } from '../native/unknown';

import { AFGBuildableConveyorLift } from './AFGBuildableConveyorLift';
import { AFGSplineHologram } from './AFGSplineHologram';

export interface AFGConveyorLiftHologram extends AFGSplineHologram {
  /**
   * The two connection components for this conveyor.
   */
  mConnectionComponents: Unknown<'UFGFactoryConnectionComponent'>;

  /**
   * The connections we've made.
   */
  mSnappedConnectionComponents: Unknown<'UFGFactoryConnectionComponent'>;

  /**
   * If we upgrade another conveyor lift this is the belt we replace.
   */
  mUpgradedConveyorLift: AFGBuildableConveyorLift;

  /**
   * Transform of the top part of the lift, in actor local space.
   */
  mTopTransform: Unknown<'FTransform'>;

  mBottomMesh: UStaticMesh;

  mMidMesh: UStaticMesh;

  mTopMesh: UStaticMesh;

  mJointMesh: UStaticMesh;

  /**
   * Used to replicate the direction arrow.
   */
  mArrowDirection: Unknown<'EFactoryConnectionDirection'>;

  /**
   * Arrow to indicate the direction of the lift while placing it.
   */
  mArrowComponent: Unknown<'UStaticMeshComponent'>;
}
