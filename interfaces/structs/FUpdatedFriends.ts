import { FFGOnlineFriend } from './FFGOnlineFriend';

/**
 * Workaround as it seems like you can't have a TArray<FFGOnlineFriends> exposed to a Dynamic multicast delegate
 */
export interface FUpdatedFriends {
  Friends: FFGOnlineFriend[];
}
