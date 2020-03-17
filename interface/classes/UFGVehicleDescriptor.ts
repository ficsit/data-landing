import { classReference } from '../native/references';

import { AFGVehicle } from './AFGVehicle';
import { UFGBuildDescriptor } from './UFGBuildDescriptor';

export interface UFGVehicleDescriptor extends UFGBuildDescriptor {
  /**
   * The vehicle this descriptor describes.
   */
  mVehicleClass: classReference<AFGVehicle>;
}
