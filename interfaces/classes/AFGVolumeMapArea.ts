import { classReference } from '../native/references';
import { Unknown } from '../native/unknown';

import { UFGMapArea } from './UFGMapArea';

export interface AFGVolumeMapArea extends Unknown<'AVolume'> {
  /**
   * This is the area this map defines.
   */
  mMapArea: classReference<UFGMapArea>;
}
