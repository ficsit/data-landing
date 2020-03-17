import { Unknown } from '../native/unknown';

import { UFGWidgetSwitcher } from './UFGWidgetSwitcher';

export interface UFGMenuBase extends Unknown<'UUserWidget'> {
  /**
   * Cached switcher owning this widget
   */
  mCachedOwner: UFGWidgetSwitcher;
}
