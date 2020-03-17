import { AFGBuildableAttachmentSplitter } from './AFGBuildableAttachmentSplitter';
import { AFGConveyorAttachmentHologram } from './AFGConveyorAttachmentHologram';
import { UFGFactoryConnectionComponent } from './UFGFactoryConnectionComponent';

export interface AFGAttachmentSplitterHologram extends AFGConveyorAttachmentHologram {
  /**
   * If we're upgrading another actor.
   */
  mUpgradedSplitter: AFGBuildableAttachmentSplitter;

  /**
   * Used when upgrading.
   */
  mSnappedConnectionComponents: UFGFactoryConnectionComponent[];
}
