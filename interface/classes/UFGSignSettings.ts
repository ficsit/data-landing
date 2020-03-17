import { int32 } from '../native/primitive';
import { Unknown } from '../native/unknown';
import { FSignColorData } from '../structs/FSignColorData';

import { UFGSettings } from './UFGSettings';

export interface UFGSignSettings extends UFGSettings {
  /**
   * Base material to be used for text component material instances
   */
  mTextMaterial: Unknown<'UMaterial'>;

  /**
   * Base material to be used for icon material instances
   */
  mIconMaterial: Unknown<'UMaterial'>;

  /**
   * Base material to be used for sign background material instances
   */
  mBackgroundMaterial: Unknown<'UMaterial'>;

  /**
   * The index in the sign mesh material array pointing to the screen / background material
   */
  mBackgroundMeshMaterialIndex: int32;

  /**
   * Parameter name of color adjustment FVector inside the text material
   */
  mTextMaterialColorParam: string;

  /**
   * Parameter name of color adjustment FVector inside the icon material
   */
  mIconMaterialColorParam: string;

  /**
   * Parameter name of color adjustment FVector inside the background material
   */
  mBackgroundMaterialColorParam: string;

  /**
   * Array of sign color data
   */
  mSignColorData: FSignColorData[];
}
