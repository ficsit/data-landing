import { int32 } from '../native/primitive';

export interface AFGBuildableAttachmentMerger {
  /**
   * Cycles through the inputs, stores the input we want to check next. Index is for the mInputs array.
   */
  mCurrentInputIndex: int32;

  mCurrentInventoryIndex: int32;
}
