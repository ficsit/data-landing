import { EStackSize } from '../enums/EStackSize';
import { UStaticMesh } from '../native/assets';
import { float, int32 } from '../native/primitive';
import { classReference } from '../native/references';
import { Unknown } from '../native/unknown';
import { FItemSettings } from '../structs/FItemSettings';
import { FResourceDepositPackage } from '../structs/FResourceDepositPackage';

import { AFGItemPickup_Spawnable } from './AFGItemPickup_Spawnable';
import { AFGRenderTargetStage } from './AFGRenderTargetStage';
import { UFGResourceDescriptor } from './UFGResourceDescriptor';
import { UFGSettings } from './UFGSettings';

export interface UFGResourceSettings extends UFGSettings {
  /**
   * List of all available resource deposit packages
   */
  mResourceDepositTable: FResourceDepositPackage[];

  /**
   * Index 0 is poor amount, 1 is normal and 2 is rich
   */
  mResourceAmount: Unknown<'FInt32Interval'>[];

  /**
   * Index 0 is poor amount, 1 is normal and 2 is rich
   */
  mPurityMultiplier: float[];

  mWaterResourceDescriptor: classReference<UFGResourceDescriptor>;

  /**
   * Mesh used on items that do not have their own specified.
   */
  mDefaultItemMesh: UStaticMesh;

  /**
   * How many of diffrent items can be in the same stack
   */
  mStackSizes: Map<int32, EStackSize>;

  /**
   * The class of item we want to drop when we drop something
   */
  mItemDropClass: classReference<AFGItemPickup_Spawnable>;

  /**
   * The stage that should be used to make icons
   */
  mStageClass: classReference<AFGRenderTargetStage>;

  /**
   * Resolutions of different item classes
   */
  mIconSettings: FItemSettings[];
}
