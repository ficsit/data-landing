import { EResourceForm } from '../enums/EResourceForm';
import { EStackSize } from '../enums/EStackSize';
import { FSlateBrush, UStaticMesh, UTexture2D } from '../native/assets';
import { UObject } from '../native/classes';
import { float, int32, localized } from '../native/primitive';
import { classReference } from '../native/references';
import { Color, Rotator } from '../native/structs';
import { Unknown } from '../native/unknown';
import { FItemView } from '../structs/FItemView';

import { UFGItemCategory } from './UFGItemCategory';

export interface UFGItemDescriptor extends UObject {
  mUseDisplayNameAndDescription: boolean;

  /**
   * Readable name of the item
   */
  mDisplayName: localized;

  /**
   * Readable description of the item
   */
  mDescription: localized;

  /**
   * Abbreviated name of the item
   */
  mAbbreviatedDisplayName: localized;

  /**
   * How many of this item can be in the same slot in an inventory
   */
  mStackSize: EStackSize;

  /**
   * Indicates if this item can be thrown in the trash or not
   */
  mCanBeDiscarded: boolean;

  /**
   * Do we want to know if this item ever has been picked up
   */
  mRememberPickUp: boolean;

  /**
   * Energy value for this resource if used as fuel. In megawatt seconds (MWs), a.k.a. mega joule (MJ)
   */
  mEnergyValue: float;

  mRadioactiveDecay: float;

  /**
   * The state of this resource (cannot change during it's lifetime).
   */
  mForm: EResourceForm;

  /**
   * Old brush used for UI, can't be DEPRECATED_ as it won't work in shipping builds during conversion then
   */
  mInventoryIcon: FSlateBrush;

  /**
   * Small icon of the item, always in memory
   */
  mSmallIcon: UTexture2D;

  /**
   * Big icon of the item, SHOULD only be loaded by demand, but right now persistent in memory
   */
  mPersistentBigIcon: UTexture2D;

  /**
   * The static mesh we want for representing the resource when they are in the production line.
   */
  mConveyorMesh: UStaticMesh;

  /**
   * The view in the build menu for this item
   */
  mPreviewView: FItemView;

  /**
   * The category for this item
   */
  mItemCategory: classReference<UFGItemCategory>;

  /**
   * The jaw of the object when rendering the icon
   */
  mIconYaw: float;

  /**
   * The distance to the object when rendering the icon
   */
  mIconView: FItemView;

  /**
   * The transform used for icon capture
   */
  mIconCameraTransform: Unknown<'FTransform'>;

  /**
   * The FOV used for icon capture
   */
  mIconFOV: float;

  /**
   * The object orientation used for icon capture
   */
  mIconObjectOrientation: Rotator;

  /**
   * The spring arm distance used for icon capture
   */
  mIconCameraDistance: float;

  /**
   * The sky orientation used for icon capture
   */
  mIconSkyOrientation: Rotator;

  mFluidDensity: float;

  mFluidViscosity: float;

  mFluidFriction: float;

  mFluidColor: Color;

  mResourceSinkPoints: int32;
}
