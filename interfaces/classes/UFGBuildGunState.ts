import { UObject } from '../native/classes';
import { float, localized } from '../native/primitive';

export interface UFGBuildGunState extends UObject {
  /**
   * Time (in seconds) it takes for the action (eg. Build, dismantle)
   */
  mActionDelay: float;

  /**
   * Text to show while action is in progress
   */
  mActionMessage: localized;
}
