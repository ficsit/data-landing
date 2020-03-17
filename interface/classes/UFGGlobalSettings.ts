import { UObject } from '../native/classes';
import { classReference } from '../native/references';
import { Unknown } from '../native/unknown';

import { UFGDropPodSettings } from './UFGDropPodSettings';
import { UFGEnvironmentSettings } from './UFGEnvironmentSettings';
import { UFGFactorySettings } from './UFGFactorySettings';
import { UFGHardDriveSettings } from './UFGHardDriveSettings';
import { UFGResourceSettings } from './UFGResourceSettings';
import { UFGSignSettings } from './UFGSignSettings';
import { UFGSubsystemClasses } from './UFGSubsystemClasses';

export interface UFGGlobalSettings extends UObject {
  /**
   * Settings for resources
   */
  mResourceSettings: classReference<UFGResourceSettings>;

  /**
   * Settings for resources
   */
  mFactorySettings: classReference<UFGFactorySettings>;

  /**
   * Settings for drop pods
   */
  mDropPodSettings: classReference<UFGDropPodSettings>;

  /**
   * Settings for Hard Drive Research
   */
  mHardDriveSettings: classReference<UFGHardDriveSettings>;

  /**
   * Settings for drop pods
   */
  mEnvironmentSettings: classReference<UFGEnvironmentSettings>;

  mSubsystemClasses: classReference<UFGSubsystemClasses>;

  mSignSettings: classReference<UFGSignSettings>;

  /**
   * Default class for specifying the settings class
   */
  mGlobalSettingsClassName: Unknown<'FSoftClassPath'>;
}
