import { float, int32 } from '../native/primitive';
import { Unknown } from '../native/unknown';

export interface AFGTimeOfDaySubsystem {
  /**
   * How often (in seconds) we should synchronize the time of day with the server
   */
  mSyncronizeTimeOfDayInterval: float;

  mDayLengthMinutes: float;

  mNightLengthMinutes: float;

  /**
   * In hours, when does the day start (if you want 06.45, enter 06.75)
   */
  mDayStartTime: float;

  /**
   * In hours, when does the night start (if you want 19.10, enter 19.1666667)
   */
  mNightStartTime: float;

  /**
   * Multiplier for speeding up the day/night cycle
   */
  mSpeedMultiplier: float;

  /**
   * How many seconds that has passed into our current day
   */
  mDaySeconds: float;

  /**
   * Written to by server, sends over the time that the server currently have
   */
  mReplicatedDaySeconds: float;

  /**
   * The current day that has passed
   */
  mNumberOfPassedDays: int32;

  /**
   * Will only update the time if we set this to true
   */
  mUpdateTime: boolean;

  /**
   * Server and Client | Called when a new day starts
   */
  mOnNewDayDelegate: Unknown<'FNewDayDelegate'>;
}
