import { ECachedNATType } from '../enums/ECachedNATType';
import { int32 } from '../native/primitive';
import { Unknown } from '../native/unknown';

export interface FFGOnlineSessionSettings {
  /**
   * IMPORTANT: Don't rename this! This is parsed in engine code
   */
  HostId: Unknown<'FUniqueNetIdRepl'>;

  /**
   * Number of players currently connected to the game
   */
  NumConnectedPlayers: int32;

  /**
   * For how long has the game been played in seconds
   */
  PlayDuration: int32;

  /**
   * The build version on the form ++FactoryGame+Main-4.20-CL-123456
   */
  BuildVersion: string;

  /**
   * Name of the session, same as the name exposed in the Save/Load menus
   */
  SessionName: string;

  /**
   * Hosts nat type
   */
  NATType: ECachedNATType;
}
