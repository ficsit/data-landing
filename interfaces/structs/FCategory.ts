import { FSlateBrush } from '../native/assets';
import { localized } from '../native/primitive';

export interface FCategory {
  /**
   * Localized name of a category
   */
  Name: localized;

  /**
   * Icon for the category
   */
  Icon: FSlateBrush;
}
