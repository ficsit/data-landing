import { UObject } from '../native/classes';
import { Unknown } from '../native/unknown';

import { UFGPopupWidget } from './UFGPopupWidget';

export interface UFGPopupWidgetContent extends Unknown<'UUserWidget'> {
  mInstigator: UObject;

  mPopupWidget: UFGPopupWidget;
}
