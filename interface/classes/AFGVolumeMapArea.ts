import { classReference } from '../native/references';

import { UFGMapArea } from './UFGMapArea';

export interface AFGVolumeMapArea {
  /**
   * This is the area this map defines.
   */
  mMapArea: classReference<UFGMapArea>;
}
