import { AFGPlayerState } from '../classes/AFGPlayerState';
import { EFGChatMessageType } from '../enums/EFGChatMessageType';
import { float } from '../native/primitive';

export interface FChatMessageStruct {
  /**
   * The message that was sent
   */
  MessageString: string;

  /**
   * Synchronized time stamp of when the message was sent
   */
  ServerTimeStamp: float;

  /**
   * The player who sent the message
   */
  Sender: AFGPlayerState;

  MessageType: EFGChatMessageType;
}
