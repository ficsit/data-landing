import { float, int32 } from '../native/primitive';
import { Unknown } from '../native/unknown';

import { AFGBuildableHologram } from './AFGBuildableHologram';

export interface AFGWallAttachmentHologram extends AFGBuildableHologram {
  /**
   * Are you allowed to rotate this attachment on the walls surface.
   */
  mIsRotationAllowed: boolean;

  /**
   * Whether or not it is possible to snap to the ceiling.
   */
  mCanSnapToFoundationCeiling: boolean;

  /**
   * Whether or not it is possible to snap to the side of foundations.
   */
  mCanSnapToFoundationSide: boolean;

  /**
   * The rotation step for when rotating, if 0 then use the default granularity.
   */
  mRotationStep: int32;

  /**
   * Snapping offset of this attachment on the walls surface.
   */
  mSnapOffset: Unknown<'FVector2D'>;

  /**
   * Distance to inset the hologram when attaching to a foundation.
   */
  mFoundationSnappingInset: float;
}
