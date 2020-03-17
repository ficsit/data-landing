import { float } from '../native/primitive';
import { Unknown } from '../native/unknown';

import { UFGMenuBase } from './UFGMenuBase';

export interface UFGWidgetSwitcher {
  mFadeOutTime: float;

  mOnWidgetSet: Unknown<'FOnActiveWidgetSet'>;

  mOnFadoutDone: Unknown<'FOnMenuAnimDone'>;

  /**
   * Pending widget that will be set when the animations is done
   */
  mPendingNewWidget: Unknown<'UWidget'>;

  /**
   * Widget currently running it's entering animation
   */
  mEnteringWidget: UFGMenuBase;

  /**
   * Widget currently running it's exiting animation
   */
  mExitingWidget: UFGMenuBase;
}
