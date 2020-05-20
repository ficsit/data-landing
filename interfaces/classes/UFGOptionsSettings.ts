import { EOptionType } from '../enums/EOptionType';
import { classReference } from '../native/references';
import { Unknown } from '../native/unknown';
import { FOptionRowData } from '../structs/FOptionRowData';

import { UFGDynamicOptionsRow } from './UFGDynamicOptionsRow';
import { UFGOptionsValueController } from './UFGOptionsValueController';

export interface UFGOptionsSettings extends Unknown<'UDeveloperSettings'> {
  mGameplayOptions: FOptionRowData[];

  mAudioOptions: FOptionRowData[];

  mVideoOptions: FOptionRowData[];

  mControlsOptions: FOptionRowData[];

  mUserInterfaceOptions: FOptionRowData[];

  mOptionTypeWidgetsClasses: Map<EOptionType, classReference<UFGOptionsValueController>>;

  mOptionRowWidgetClass: classReference<UFGDynamicOptionsRow>;
}
