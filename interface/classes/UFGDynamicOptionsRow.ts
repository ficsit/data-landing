import { classReference } from '../native/references';
import { Unknown } from '../native/unknown';

import { UFGOptionsValueController } from './UFGOptionsValueController';

export interface UFGDynamicOptionsRow extends Unknown<'UUserWidget'> {
  mWidgetOptionClass: classReference<UFGOptionsValueController>;

  mValueControllerWidget: UFGOptionsValueController;
}
