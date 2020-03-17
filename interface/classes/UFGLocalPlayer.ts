import { Unknown } from '../native/unknown';

export interface UFGLocalPlayer {
  mOnLoginStateChanged: Unknown<'FOnLoginStateChanged'>;

  /**
   * Called when the friendslist has been updated (that is, a user is has added/removed you as a friend)
   */
  mOnFriendsListUpdated: Unknown<'FOnFriendsListUpdated'>;

  /**
   * Called when the session state has changed when creating a online game
   */
  mOnCreateSessionStateChanged: Unknown<'FOnCreateSessionStateChanged'>;

  /**
   * Called a friends presence is updated
   */
  mOnFriendsPresenceUpdated: Unknown<'FOnFriendPresenceUpdated'>;

  /**
   * Called a friends presence is updated
   */
  mOnInviteReceived: Unknown<'FOnGameInviteReceived'>;
}
