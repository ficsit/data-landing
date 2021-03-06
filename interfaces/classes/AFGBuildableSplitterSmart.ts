import { int32, uint8 } from '../native/primitive';
import { classReference } from '../native/references';
import { Unknown } from '../native/unknown';
import { FInventoryItem } from '../structs/FInventoryItem';
import { FSplitterSortRule } from '../structs/FSplitterSortRule';

import { AFGBuildableAttachmentSplitter } from './AFGBuildableAttachmentSplitter';
import { UFGItemDescriptor } from './UFGItemDescriptor';

export interface AFGBuildableSplitterSmart extends AFGBuildableAttachmentSplitter {
  OnSortRulesChangedDelegate: Unknown<'FOnSortRulesChanged'>;

  /**
   * These are the sorting rules the player has entered.
   */
  mSortRules: FSplitterSortRule[];

  /**
   * How many rules this splitter can have.
   */
  mMaxNumSortRules: int32;

  mLastItem: FInventoryItem;

  mItemToLastOutputMap: Map<classReference<UFGItemDescriptor>, uint8>;

  mLastOutputIndex: int32;
}
