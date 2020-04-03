import { set } from '../native/collections';

export interface FErrors {
  /**
   * All unknown levels
   */
  UnknownLevels: set<string>[];

  /**
   * All unknown classes
   */
  UnknownClasses: set<string>[];
}
