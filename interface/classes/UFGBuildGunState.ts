import { float, localized } from '../native/primitive';

export interface UFGBuildGunState {
  /**
   * Time (in seconds) it takes for the action (eg. Build, dismantle)
   */
  mActionDelay: float;

  /**
   * Text to show while action is in progress
   */
  mActionMessage: localized;
}
