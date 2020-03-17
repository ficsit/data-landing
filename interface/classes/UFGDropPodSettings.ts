import { FDropPackage } from '../structs/FDropPackage';

import { UFGSettings } from './UFGSettings';

export interface UFGDropPodSettings extends UFGSettings {
  /**
   * List of all available drop packages
   */
  mDropTable: FDropPackage[];
}
