import { Unknown } from '../native/unknown';

import { AFGBuildableAttachmentSplitter } from './AFGBuildableAttachmentSplitter';
import { AFGConveyorAttachmentHologram } from './AFGConveyorAttachmentHologram';

export interface AFGAttachmentSplitterHologram extends AFGConveyorAttachmentHologram {
  /**
   * If we're upgrading another actor.
   */
  mUpgradedSplitter: AFGBuildableAttachmentSplitter;

  /**
   * Used when upgrading.
   */
  mSnappedConnectionComponents: Unknown<'UFGFactoryConnectionComponent'>[];
}
