import { float } from '../native/primitive';
import { classReference } from '../native/references';

import { AFGResourceSinkSubsystem } from './AFGResourceSinkSubsystem';
import { UFGFactoryConnectionComponent } from './UFGFactoryConnectionComponent';
import { UFGInventoryComponent } from './UFGInventoryComponent';
import { UFGItemDescriptor } from './UFGItemDescriptor';

export interface AFGBuildableResourceSink {
  mCouponInventory: UFGInventoryComponent;

  /**
   * Cached factory input connections
   */
  mFactoryInputConnections: UFGFactoryConnectionComponent[];

  /**
   * Cached resource sink subsystem
   */
  mResourceSinkSubsystem: AFGResourceSinkSubsystem;

  /**
   * The item descriptor that should be used as a coupon
   */
  mCouponClass: classReference<UFGItemDescriptor>;

  /**
   * How long after the last sunk item should we stop producing
   */
  mProcessingTime: float;

  /**
   * How long we have left on the timer when saving the game
   */
  mSavedProducingTimer: float;
}
