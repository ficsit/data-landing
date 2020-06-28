import { IFGSaveInterface } from '../interfaces/IFGSaveInterface';
import { AActor } from '../native/classes';
import { float, int32 } from '../native/primitive';

import { AFGWheeledVehicle } from './AFGWheeledVehicle';

export interface AFGTargetPoint extends AActor, IFGSaveInterface {
  /**
   * Reference to the next target point ( used in linked list )
   */
  mNext: AFGTargetPoint;

  /**
   * Vehicle that created this node
   */
  mOwningVehicle: AFGWheeledVehicle;

  /**
   * Update visibility
   */
  mIsVisible: boolean;

  /**
   * Accumulated wait time for this node
   */
  mWaitTime: float;

  /**
   * Default wait time if this target point has no target speed
   */
  mDefaultWaitTime: float;

  /**
   * Target speed at this node
   */
  mTargetSpeed: int32;
}
