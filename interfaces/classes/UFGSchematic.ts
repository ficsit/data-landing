import { EIncludeInBuilds } from '../enums/EIncludeInBuilds';
import { ESchematicCategory } from '../enums/ESchematicCategory';
import { ESchematicType } from '../enums/ESchematicType';
import { FSlateBrush } from '../native/assets';
import { UObject } from '../native/classes';
import { float, int32, localized } from '../native/primitive';
import { classReference } from '../native/references';
import { Unknown } from '../native/unknown';
import { FItemAmount } from '../structs/FItemAmount';

import { UFGAvailabilityDependency } from './UFGAvailabilityDependency';
import { UFGSchematicCategory } from './UFGSchematicCategory';
import { UFGUnlock } from './UFGUnlock';

export interface UFGSchematic extends UObject {
  /**
   * What type of schematic is this.
   */
  mType: ESchematicType;

  /**
   * The name to be displayed to the player
   */
  mDisplayName: localized;

  /**
   * The category this schematic belongs to.
   */
  mSchematicCategory: classReference<UFGSchematicCategory>;

  /**
   * The sub categories this schematic belongs to.
   */
  mSubCategories: classReference<UFGSchematicCategory>[];

  /**
   * The tech tier that this Schematic belongs to. [0...N]
   */
  mTechTier: int32;

  /**
   * The cost of this schematic.
   */
  mCost: FItemAmount[];

  /**
   * When we acquire this schematic how long does it take for it to complete its actions
   */
  mTimeToComplete: float;

  /**
   * The unlocks you get when purchasing
   */
  mUnlocks: UFGUnlock[];

  /**
   * Icon used when displaying this schematic
   */
  mSchematicIcon: FSlateBrush;

  /**
   * Is this schematic dependant on anything to be available for purchase?
   */
  mSchematicDependencies: UFGAvailabilityDependency[];

  /**
   * Is this schematic dependant on any other for being unlocked?
   */
  mDependsOnSchematic: classReference<UFGSchematic>;

  /**
   * Additional list of schematics for more specific dependency checking
   */
  mAdditionalSchematicDependencies: classReference<UFGSchematic>[];

  /**
   * The category this schematic belongs to.
   */
  mSchematicCategoryDeprecated: ESchematicCategory;

  /**
   * Asset Bundle data computed at save time. In cooked builds this is accessible from AssetRegistry
   */
  mAssetBundleData: Unknown<'FAssetBundleData'>;

  /**
   * Slightly misleading name, as this doesn't only apply to builds. If set to Never, it won't show up in editor
   */
  mIncludeInBuilds: EIncludeInBuilds;
}
