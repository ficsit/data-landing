import { Unknown } from '../native/unknown';

export interface UFGSignElementListWidget {
  /**
   * Button to add a new Text Element
   */
  mAddTextElementButton: Unknown<'UButton'>;

  /**
   * Button to add a new Icon Element
   */
  mAddIconElementButton: Unknown<'UButton'>;

  /**
   * The verticle box where added elements will be listed
   */
  mElementListBox: Unknown<'UVerticalBox'>;
}
