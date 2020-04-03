import { EResourcePurity } from '../enums/EResourcePurity';
import { localized } from '../native/primitive';

export interface FPurityTextPair {
  /**
   * Localizable text
   */
  Text: localized;

  /**
   * Enum to localize
   */
  Purity: EResourcePurity;
}
