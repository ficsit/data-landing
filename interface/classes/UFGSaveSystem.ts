import { FMapRedirector } from '../structs/FMapRedirector';

export interface UFGSaveSystem {
  /**
   * Redirects for the maps when someone renames a map
   */
  mMapRedirectors: FMapRedirector[];
}
