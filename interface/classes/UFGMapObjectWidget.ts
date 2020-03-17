import { AFGMinimapCaptureActor } from './AFGMinimapCaptureActor';
import { UFGActorRepresentation } from './UFGActorRepresentation';
import { UFGMapWidget } from './UFGMapWidget';

export interface UFGMapObjectWidget {
  mActorRepresentation: UFGActorRepresentation;

  mMapWidget: UFGMapWidget;

  /**
   * If this map object is visible by it's representation type on the map
   */
  mFilteredVisibility: boolean;

  mMinimapCaptureActor: AFGMinimapCaptureActor;
}
