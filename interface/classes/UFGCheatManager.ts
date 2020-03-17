import { Unknown } from '../native/unknown';

export interface UFGCheatManager extends Unknown<'UCheatManager'> {
  /**
   * This is used to make picking the same classes in the cheat board easier
   */
  mPopularUClassChoices: Unknown<'UClass'>[];
}
