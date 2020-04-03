import { Unknown } from '../native/unknown';

export interface UFGListView extends Unknown<'UPanelWidget'> {
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
