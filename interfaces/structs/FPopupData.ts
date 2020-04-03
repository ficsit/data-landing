import { EPopupId } from '../enums/EPopupId';
import { UObject } from '../native/classes';
import { localized } from '../native/primitive';
import { classReference } from '../native/references';
import { Unknown } from '../native/unknown';

export interface FPopupData {
  Title: localized;

  Body: localized;

  ID: EPopupId;

  PopupClass: classReference<Unknown<'UUserWidget'>>;

  Instigator: UObject;

  PopupConfirmClickedDelegate_DEPRECATED: Unknown<'FPopupConfirmClicked'>;

  PopupClosedDelegate: Unknown<'FPopupClosed'>;
}
