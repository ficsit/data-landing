import { int32 } from '../native/primitive';
import { classReference } from '../native/references';
import { Unknown } from '../native/unknown';

import { AFGSchematicManager } from './AFGSchematicManager';
import { UFGItemDescriptor } from './UFGItemDescriptor';
import { UFGMessageBase } from './UFGMessageBase';

export interface AFGResourceSinkSubsystem {
  /**
   * The cached schematic manager
   */
  mSchematicManager: AFGSchematicManager;

  /**
   * The coupon class that we use for buying resource sink schematics
   */
  mCouponClass: classReference<UFGItemDescriptor>;

  /**
   * The total number of resource sink points we have accumulated in total
   */
  mTotalResourceSinkPoints: Unknown<'int64'>;

  /**
   * The current point level we have reached, this value only increases and isn't not affected by printing coupons
   */
  mCurrentPointLevel: int32;

  /**
   * The number of coupons we have to our disposal to print and use
   */
  mNumResourceSinkCoupons: int32;

  /**
   * The data for the global points history of the resource sink subsystem
   */
  mGlobalPointHistory: int32[];

  /**
   * Cached points per itemdescriptor
   */
  mResourceSinkPoints: Record<classReference<UFGItemDescriptor>, int32>;

  /**
   * The messages that should play if the player tries to sink a item that you can't sink
   */
  mFailedItemSinkMessages: Record<classReference<UFGItemDescriptor>, classReference<UFGMessageBase>>;

  /**
   * The items that the player tried to sink that you can't sink that is also present in mFailedItemSinkMessages
   */
  mItemsFailedToSink: classReference<UFGItemDescriptor>[];

  /**
   * Have we ever tried to sink any item that you can't sink that is not present in mFailedItemSinkMessages
   */
  mAnyGenericItemsFailedToSink: boolean;

  /**
   * Have we sunken a item of the coupon class, Used to give a schematic
   */
  mIsCouponEverSunk: boolean;
}
