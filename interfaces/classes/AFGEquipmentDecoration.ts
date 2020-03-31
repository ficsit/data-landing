import { float } from '../native/primitive';

import { AFGEquipment } from './AFGEquipment';

export interface AFGEquipmentDecoration extends AFGEquipment {
  /**
   * Trace distance when building. * /
   */
  mPlaceDistanceMax: float;
}
