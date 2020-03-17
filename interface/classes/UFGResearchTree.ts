import { EIncludeInBuilds } from '../enums/EIncludeInBuilds';
import { FSlateBrush } from '../native/assets';
import { localized } from '../native/primitive';
import { Unknown } from '../native/unknown';

import { UFGAvailabilityDependency } from './UFGAvailabilityDependency';
import { UFGResearchTreeNode } from './UFGResearchTreeNode';

export interface UFGResearchTree {
  /**
   * The name to be displayed to the player before the tree is unlocked
   */
  mPreUnlockDisplayName: localized;

  /**
   * The name to be displayed to the player after the tree is unlocked
   */
  mDisplayName: localized;

  /**
   * The description to be displayed to the player before the tree is unlocked
   */
  mPreUnlockDescription: localized;

  /**
   * The description to be displayed to the player after the tree is unlocked
   */
  mPostUnlockDescription: localized;

  /**
   * Icon used when displaying this research tree
   */
  mResearchTreeIcon: FSlateBrush;

  /**
   * The dependencies that needs to be satisfied before the player can use the tree
   */
  mUnlockDependencies: UFGAvailabilityDependency[];

  /**
   * The dependencies that needs to be satisfied before the player can see the tree
   */
  mVisibilityDependencies: UFGAvailabilityDependency[];

  /**
   * The nodes that this tree is made up of
   */
  mNodes: UFGResearchTreeNode[];

  /**
   * Asset Bundle data computed at save time. In cooked builds this is accessible from AssetRegistry
   */
  mAssetBundleData: Unknown<'FAssetBundleData'>;

  /**
   * Slightly misleading name, as this doesn't only apply to builds. If set to Never, it won't show up in editor
   */
  mIncludeInBuilds: EIncludeInBuilds;
}
