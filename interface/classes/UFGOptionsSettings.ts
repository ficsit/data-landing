import { EOptionType } from '../enums/EOptionType';
import { classReference } from '../native/references';
import { FOptionRowData } from '../structs/FOptionRowData';

import { UFGDynamicOptionsRow } from './UFGDynamicOptionsRow';
import { UFGOptionsValueController } from './UFGOptionsValueController';

export interface UFGOptionsSettings {
  mGameplayOptions: FOptionRowData[];

  mAudioOptions: FOptionRowData[];

  mVideoOptions: FOptionRowData[];

  mControlsOptions: FOptionRowData[];

  mUserInterfaceOptions: FOptionRowData[];

  mOptionTypeWidgetsClasses: Record<EOptionType, classReference<UFGOptionsValueController>>;

  mOptionRowWidgetClass: classReference<UFGDynamicOptionsRow>;
}
