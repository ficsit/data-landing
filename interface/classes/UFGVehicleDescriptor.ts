import { classReference } from '../native/references';

import { AFGVehicle } from './AFGVehicle';

export interface UFGVehicleDescriptor {
  /**
   * The vehicle this descriptor describes.
   */
  mVehicleClass: classReference<AFGVehicle>;
}
