import { AFGBuildableFactory } from './AFGBuildableFactory';
import { AFGGamePhaseManager } from './AFGGamePhaseManager';
import { UFGInventoryComponent } from './UFGInventoryComponent';

export interface AFGBuildableSpaceElevator extends AFGBuildableFactory {
  /**
   * Our input inventory, shared for all input connections.
   */
  mInputInventory: UFGInventoryComponent;

  /**
   * A cached version of the game phase manager
   */
  mGamePhaseManager: AFGGamePhaseManager;
}
