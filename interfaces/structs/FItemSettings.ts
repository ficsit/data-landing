import { UFGItemDescriptor } from '../classes/UFGItemDescriptor';
import { int32 } from '../native/primitive';
import { classReference } from '../native/references';
import { Unknown } from '../native/unknown';

export interface FItemSettings {
  /**
   * The class (and it's subclasses) that we want to specify the resolution for
   */
  ResourceClass: classReference<UFGItemDescriptor>;

  /**
   * The x and y resolution of the icon (must be power of 2), -1 means no icon
   */
  Resolution: int32;

  /**
   * Material that should be used for each icon, need to have a parameter named Texture
   */
  MasterMaterial: Unknown<'UMaterial'>;
}
