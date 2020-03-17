import { UObject } from '../native/classes';
import { localized } from '../native/primitive';

export interface UFGConstructDisqualifier extends UObject {
  /**
   * Text displayed to the player when they couldn't build
   */
  mDisqfualifyingText: localized;
}
