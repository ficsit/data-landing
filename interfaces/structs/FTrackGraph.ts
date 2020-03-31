import { AFGBuildableRailroadTrack } from '../classes/AFGBuildableRailroadTrack';
import { UFGPowerConnectionComponent } from '../classes/UFGPowerConnectionComponent';

export interface FTrackGraph {
  /**
   * All the tracks that are connected (nodes in the graph)
   */
  Tracks: AFGBuildableRailroadTrack[];

  /**
   * This is the third rail the locomotives and stations connect to.
   */
  ThirdRail: UFGPowerConnectionComponent;
}
