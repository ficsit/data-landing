import { EIncludeInBuilds } from '../enums/EIncludeInBuilds';
import { int32 } from '../native/primitive';
import { classReference } from '../native/references';
import { Unknown } from '../native/unknown';

import { UFGItemDescriptor } from './UFGItemDescriptor';
import { UFGResearchRecipe } from './UFGResearchRecipe';
import { UFGSchematic } from './UFGSchematic';

export interface UFGResearchRecipe {
  /**
   * Items that make this research available once it enters the players inventory
   */
  mTriggerItems: classReference<UFGItemDescriptor>[];

  /**
   * Can this research be completed multiple times?
   */
  mIsRepeatable: boolean;

  mRewardUsesDropPackage: boolean;

  /**
   * What research that will be unlocked in the research tree by completing this research
   */
  mUnlockedResearch: classReference<UFGResearchRecipe>[];

  /**
   * What schematics that will be purchased by completing this research
   */
  mUnlockedSchematics: classReference<UFGSchematic>[];

  mDecorPoints: int32;

  mStructurePoints: int32;

  /**
   * Slightly misleading name, as this doesn't only apply to builds. If set to Never, it won't show up in editor
   */
  mIncludeInBuilds: EIncludeInBuilds;

  /**
   * Old property for excluding from build, remove when all UFGResearchRecipe is resaved on main
   */
  mExcludeFromBuild_DEPRECATED: boolean;

  /**
   * Asset Bundle data computed at save time. In cooked builds this is accessible from AssetRegistry
   */
  mAssetBundleData: Unknown<'FAssetBundleData'>;
}
