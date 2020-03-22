import { EHorizontalSignTextAlignment } from '../enums/EHorizontalSignTextAlignment';
import { int32 } from '../native/primitive';

import { UFGSignElementData } from './UFGSignElementData';

export interface UFGSignTextData extends UFGSignElementData {
  /**
   * Text field to be displayed on the sign
   */
  mSignText: string;

  mFontSize: int32;

  /**
   * Text align horizontal
   */
  mTextAlignmentHorizontal: EHorizontalSignTextAlignment;
}
