import { AFGBuildableAttachmentSplitter } from './AFGBuildableAttachmentSplitter';
import { UFGFactoryConnectionComponent } from './UFGFactoryConnectionComponent';

export interface AFGAttachmentSplitterHologram {
  /**
   * If we're upgrading another actor.
   */
  mUpgradedSplitter: AFGBuildableAttachmentSplitter;

  /**
   * Used when upgrading.
   */
  mSnappedConnectionComponents: UFGFactoryConnectionComponent[];
}
