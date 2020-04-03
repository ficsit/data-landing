import { UTexture2D } from '../native/assets';
import { Unknown } from '../native/unknown';

import { AFGActorRepresentationManager } from './AFGActorRepresentationManager';
import { UFGActorRepresentation } from './UFGActorRepresentation';

export interface UFGMapWidget extends Unknown<'UUserWidget'> {
  mFogOfWarTexture: UTexture2D;

  mMapActors: UFGActorRepresentation[];

  mActorRepresentationManager: AFGActorRepresentationManager;
}
