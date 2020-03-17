import { UObject } from '../native/classes';
import { FMapRedirector } from '../structs/FMapRedirector';

export interface UFGSaveSystem extends UObject {
  /**
   * Redirects for the maps when someone renames a map
   */
  mMapRedirectors: FMapRedirector[];
}
