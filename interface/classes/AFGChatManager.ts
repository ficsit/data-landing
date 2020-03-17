import { float, int32 } from '../native/primitive';
import { Unknown } from '../native/unknown';
import { FChatMessageStruct } from '../structs/FChatMessageStruct';

export interface AFGChatManager {
  /**
   * Called when you get a new local message
   */
  OnChatMessageAdded: Unknown<'FChatMessageAdded'>;

  /**
   * How many messages will we save in the chat history
   */
  mMaxNumMessagesInHistory: int32;

  /**
   * How long a message will stay fresh and visible without opening the chat
   */
  mMessageVisibleDuration: float;

  /**
   * An array of all the messages that the local player have received.
   */
  mReceivedMessages: FChatMessageStruct[];
}
