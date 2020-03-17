import { int32 } from '../native/primitive';

import { UFGSignElementData } from './UFGSignElementData';

export interface UFGSignIconData extends UFGSignElementData {
  /**
   * Index pointing to a location in the FGSignSettings Icon array
   */
  mIconIndex: int32;
}
