import { int32 } from '../native/primitive';
import { Unknown } from '../native/unknown';

export interface AFGWallAttachmentHologram {
  /**
   * Are you allowed to rotate this attachment on the walls surface.
   */
  mIsRotationAllowed: boolean;

  /**
   * The rotation step for when rotating, if 0 then use the default granularity.
   */
  mRotationStep: int32;

  /**
   * Snapping offset of this attachment on the walls surface.
   */
  mSnapOffset: Unknown<'FVector2D'>;
}
