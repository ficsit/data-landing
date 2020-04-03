import { UFGMessageBase } from '../classes/UFGMessageBase';
import { classReference } from '../native/references';

export interface FMessageData {
  /**
   * Has message been read
   */
  WasRead: boolean;

  /**
   * What class is the message
   */
  MessageClass: classReference<UFGMessageBase>;
}
