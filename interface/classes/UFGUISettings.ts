import { classReference } from '../native/references';
import { Unknown } from '../native/unknown';

export interface UFGUISettings extends Unknown<'UDeveloperSettings'> {
  /**
   * Widget used to show that the user is setting up a server
   */
  mSettingUpServerWidget: classReference<Unknown<'UUserWidget'>>;

  /**
   * Widget used to show the user when joining a session
   */
  mJoinSessionWidget: classReference<Unknown<'UUserWidget'>>;
}
