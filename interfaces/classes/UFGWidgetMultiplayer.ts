import { EMultiplayerButtonType } from '../enums/EMultiplayerButtonType';
import { Unknown } from '../native/unknown';

export interface UFGWidgetMultiplayer extends Unknown<'UUserWidget'> {
  mIsOnline: boolean;

  mIsPlayingSatisfactory: boolean;

  mTitle: string;

  mMultiplayerButtonType: EMultiplayerButtonType;
}
