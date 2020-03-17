import { AActor } from '../native/classes';
import { float } from '../native/primitive';
import { Unknown } from '../native/unknown';

import { AFGPlayerController } from './AFGPlayerController';

export interface AFGInteractableMarker {
  mIconWidget: Unknown<'UWidgetComponent'>;

  mSplineMesh: Unknown<'USplineMeshComponent'>;

  mDesiredScreenRadius: float;

  mTrackedActor: AActor;

  mCachePlayerController: AFGPlayerController;
}
