import { float } from '../native/primitive';
import { classReference } from '../native/references';
import { Unknown } from '../native/unknown';

import { AFGBuildableFactory } from './AFGBuildableFactory';
import { AFGResourceSinkSubsystem } from './AFGResourceSinkSubsystem';
import { UFGInventoryComponent } from './UFGInventoryComponent';
import { UFGItemDescriptor } from './UFGItemDescriptor';

export interface AFGBuildableResourceSink extends AFGBuildableFactory {
  mCouponInventory: UFGInventoryComponent;

  /**
   * Cached factory input connections
   */
  mFactoryInputConnections: Unknown<'UFGFactoryConnectionComponent'>[];

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
