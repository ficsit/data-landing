import { Unknown } from '../native/unknown';

import { UFGSignElementWidget } from './UFGSignElementWidget';

export interface UFGSignElementSettingsWidget extends Unknown<'UUserWidget'> {
  mElementWidget: UFGSignElementWidget;
}
