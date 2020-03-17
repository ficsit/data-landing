import { float, int32 } from '../native/primitive';
import { Unknown } from '../native/unknown';

/**
 * @todoSigns : Change all blueprint read / write properties over to getters / setters where applicable
 */
export interface UFGSignElementData {
  /**
   * unique id to identify this element by buildable signs
   */
  mSignElementID: int32;

  /**
   * Index pointing to a location in the FGSignSettings Color Array
   */
  mColorIndex: int32;

  /**
   * Position offset from center
   */
  mTranslationOffset: Unknown<'FVector2D'>;

  /**
   * Roll Rotation
   */
  mRotation: float;

  /**
   * Global uniform scale factor
   */
  mScale: float;

  /**
   * If embedded, this indicates that the element should not be given its own element list widget ( tex. the background pixels in layers )
   */
  mEmbeddedInLayer: boolean;

  mIsElementStatic: boolean;
}
