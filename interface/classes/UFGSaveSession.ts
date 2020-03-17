import { UObject } from '../native/classes';
import { float, int32 } from '../native/primitive';

export interface UFGSaveSession extends UObject {
  /**
   * How often in seconds to autosave, a value of < 0 means disabled
   */
  mAutosaveInterval: float;

  /**
   * The number of autosaves to rotate
   */
  mNumRotatingAutosaves: int32;
}
