import { classReference } from '../native/references';

import { UFGOptionsValueController } from './UFGOptionsValueController';

export interface UFGDynamicOptionsRow {
  mWidgetOptionClass: classReference<UFGOptionsValueController>;

  mValueControllerWidget: UFGOptionsValueController;
}
