import { UObject } from '../native/classes';
import { Unknown } from '../native/unknown';

export interface UFGPopupWidget {
  /**
   * Delegate for when pressing the confirm button in popup
   */
  mPopupConfirmClickedDelegate_DEPRECATED: Unknown<'FPopupConfirmClicked'>;

  /**
   * Delegate for when pressing the confirm button in popup
   */
  mPopupClosedDelegate: Unknown<'FPopupClosed'>;

  mInstigator: UObject;
}
