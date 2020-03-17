import { classReference } from '../native/references';
import { FItemFoundData } from '../structs/FItemFoundData';
import { FResearchTreeMessageData } from '../structs/FResearchTreeMessageData';
import { FSchematicMessagePair } from '../structs/FSchematicMessagePair';

import { AFGCharacterPlayer } from './AFGCharacterPlayer';
import { UFGMessageBase } from './UFGMessageBase';

export interface AFGStorySubsystem {
  mActivePlayers: AFGCharacterPlayer[];

  /**
   * array of schematic/message pairs
   */
  mSchematicMessageData: FSchematicMessagePair[];

  /**
   * array of item descriptor class/message and if they have been found already
   */
  mItemFoundData: FItemFoundData[];

  mResearchTreeMessageData: FResearchTreeMessageData[];

  mResearchTimerCompleteMessage: classReference<UFGMessageBase>;
}
