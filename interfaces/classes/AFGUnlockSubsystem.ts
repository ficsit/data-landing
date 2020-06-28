import { IFGSaveInterface } from '../interfaces/IFGSaveInterface';
import { int32 } from '../native/primitive';
import { classReference } from '../native/references';
import { Unknown } from '../native/unknown';

import { AFGSubsystem } from './AFGSubsystem';
import { UFGMessageBase } from './UFGMessageBase';
import { UFGResourceDescriptor } from './UFGResourceDescriptor';

export interface AFGUnlockSubsystem extends AFGSubsystem, IFGSaveInterface {
  /**
   * SERVER ONLY: Called when we unlocked more inventory slots
   */
  mOnUnlockedMoreInventorySlots: Unknown<'FUnlockMoreInventorySlots'>;

  /**
   * SERVER ONLY: Called when we unlocked more arms slots
   */
  mOnUnlockedMoreArmsSlots: Unknown<'FUnlockMoreInventorySlots'>;

  /**
   * Message sent when the map is unlocked
   */
  mMapUnlockedMessage: classReference<UFGMessageBase>;

  /**
   * Message sent when unlocking inventory slot
   */
  mInventorySlotUnlockedMessage: classReference<UFGMessageBase>;

  /**
   * Message sent when unlocking building efficiency display
   */
  mBuildingEfficiencyUnlockedMessage: classReference<UFGMessageBase>;

  /**
   * Message sent when unlocking overclocking of buildings
   */
  mBuildingOverclockUnlockedMessage: classReference<UFGMessageBase>;

  /**
   * Message sent when unlocking arm equipment slot
   */
  mArmEquipmentSlotUnlockedMessage: classReference<UFGMessageBase>;

  /**
   * These are the resources the players can use their scanner to find
   */
  mScannableResources: classReference<UFGResourceDescriptor>[];

  /**
   * Did the player unlock the minimap?
   */
  mIsMapUnlocked: boolean;

  /**
   * Is the building efficiency display unlocked
   */
  mIsBuildingEfficiencyUnlocked: boolean;

  /**
   * Is the building overclocking unlocked
   */
  mIsBuildingOverclockUnlocked: boolean;

  /**
   * The highest total number of inventory slots that any player have ever had, saved for save compatibility and rebalancing
   */
  mNumTotalInventorySlots: int32;

  /**
   * The highest total number of arm equipment slots that any player have ever had, saved for save compatibility and rebalancing
   */
  mNumTotalArmEquipmentSlots: int32;
}
