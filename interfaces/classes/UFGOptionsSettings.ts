import { EOptionType } from '../enums/EOptionType';
import { classReference } from '../native/references';
import { Unknown } from '../native/unknown';
import { FActionMappingDisplayName } from '../structs/FActionMappingDisplayName';
import { FAxisMappingDisplayName } from '../structs/FAxisMappingDisplayName';
import { FOptionRowData } from '../structs/FOptionRowData';

import { UFGDynamicOptionsRow } from './UFGDynamicOptionsRow';
import { UFGOptionsValueController } from './UFGOptionsValueController';

export interface UFGOptionsSettings extends Unknown<'UDeveloperSettings'> {
  mAxisBindingsDisplayNames: FAxisMappingDisplayName[];

  mActionBindingsDisplayNames: FActionMappingDisplayName[];

  mGameplayOptions: FOptionRowData[];

  mAudioOptions: FOptionRowData[];

  mVideoOptions: FOptionRowData[];

  mControlsOptions: FOptionRowData[];

  mUserInterfaceOptions: FOptionRowData[];

  mOptionTypeWidgetsClasses: Map<EOptionType, classReference<UFGOptionsValueController>>;

  mOptionRowWidgetClass: classReference<UFGDynamicOptionsRow>;
}
