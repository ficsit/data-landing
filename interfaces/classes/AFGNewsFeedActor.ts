import { AActor } from '../native/classes';
import { localized } from '../native/primitive';
import { Unknown } from '../native/unknown';
import { FNewsFeedMap } from '../structs/FNewsFeedMap';

export interface AFGNewsFeedActor extends AActor {
  /**
   * Fired when we get the result back from the HTTP Get request
   */
  mOnNewsReceived: Unknown<'FOnNewsReceived'>;

  /**
   * Yeah yeah, this is only a prototype class it breaks code convention, fix it when we make a proper news feed
   */
  mNewFeedText: localized;

  /**
   * Display this text if we fail to get the news feed text
   */
  mNewsFeedRequestFailedText: localized;

  mNewsFeedURLs: FNewsFeedMap[];
}
