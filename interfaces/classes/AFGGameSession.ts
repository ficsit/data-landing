import { int32 } from '../native/primitive';
import { Unknown } from '../native/unknown';

export interface AFGGameSession extends Unknown<'AGameSession'> {
  /**
   * Used to keep track of players when they last tried to login and failed to detect brute force logins
   */
  mLastLoginFailTime: Record<Unknown<'APlayerController'>, Unknown<'double'>>;

  /**
   * Used to keep track of how many times a player has failed to login in a row
   */
  mFailedLoginCount: Record<Unknown<'APlayerController'>, int32>;

  /**
   * List of logged in admins
   */
  mLoggedInAdmins: Unknown<'APlayerController'>[];
}
