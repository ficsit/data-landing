import { UTexture2D } from '../native/assets';

import { AFGActorRepresentationManager } from './AFGActorRepresentationManager';
import { UFGActorRepresentation } from './UFGActorRepresentation';

export interface UFGMapWidget {
  mFogOfWarTexture: UTexture2D;

  mMapActors: UFGActorRepresentation[];

  mActorRepresentationManager: AFGActorRepresentationManager;
}
