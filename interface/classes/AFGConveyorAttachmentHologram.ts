import { float } from '../native/primitive';

import { AFGBuildableConveyorBelt } from './AFGBuildableConveyorBelt';
import { UFGFactoryConnectionComponent } from './UFGFactoryConnectionComponent';

export interface AFGConveyorAttachmentHologram {
  /**
   * Used to limit the placement in turns. What's the maximum offset to check from center to detect the curve.
   */
  mMaxValidTurnOffset: float;

  /**
   * Used to limit the placement in turns. What's the maximum angle.
   */
  mMaxValidTurnAngle: float;

  /**
   * The conveyor we snapped to.
   */
  mSnappedConveyor: AFGBuildableConveyorBelt;

  /**
   * The connection we snapped to.
   */
  mSnappedConection: UFGFactoryConnectionComponent;
}
