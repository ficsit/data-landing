import { AFGBuildableRailroadTrack } from '../classes/AFGBuildableRailroadTrack';
import { float } from '../native/primitive';
import { objectReference } from '../native/references';

export interface FRailroadTrackPosition {
  Track: objectReference<AFGBuildableRailroadTrack>;

  /**
   * Offset along the track.
   */
  Offset: float;

  Forward: float;
}
