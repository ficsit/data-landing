import { Unknown } from '../native/unknown';

export interface UFGListView {
  /**
   * Delegate for constructing a UWidget for an item to display.
   */
  mOnGenerateRowEvent: Unknown<'FOnGenerateRow'>;

  /**
   * Delegate for getting the number of items to display.
   */
  mGetNumRowsEvent: Unknown<'FGetNumRows'>;

  /**
   * The selection method for the list
   */
  mSelectionMode: Unknown<'ESelectionMode::Type'>;
}
