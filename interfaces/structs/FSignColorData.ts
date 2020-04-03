import { localized } from '../native/primitive';
import { LinearColor } from '../native/structs';
import { Unknown } from '../native/unknown';

export interface FSignColorData {
  /**
   * The static mesh that will be rendered on the actual sign in the world
   */
  SignColor: LinearColor;

  /**
   * A text name to display with the icon inside of menus
   */
  ColorName: localized;

  /**
   * The TEXT material instance is created at runtime and stored here when it is needed
   */
  TextMaterialInstance: Unknown<'UMaterialInstanceDynamic'>;

  /**
   * The ICON material instance is created at runtime and stored here when it is needed
   */
  IconMaterialInstance: Unknown<'UMaterialInstanceDynamic'>;

  /**
   * The BACKGROUND material instance is created at runtime and stored here when it is needed
   */
  BackgroundMaterialInstance: Unknown<'UMaterialInstanceDynamic'>;
}
