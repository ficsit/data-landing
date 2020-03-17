import { UTexture2D } from '../native/assets';
import { uint8 } from '../native/primitive';
import { FFogOfWarQueuePair } from '../structs/FFogOfWarQueuePair';

import { AFGActorRepresentationManager } from './AFGActorRepresentationManager';
import { AFGMinimapCaptureActor } from './AFGMinimapCaptureActor';
import { UFGActorRepresentation } from './UFGActorRepresentation';

export interface AFGMapManager {
  /**
   * The raw pixel data for the fog of war texture. Each element represents a channel for a pixel
   */
  mFogOfWarRawData: uint8[];

  /**
   * The fog of war texture that is used for the map
   */
  mFogOfWarTexture: UTexture2D;

  /**
   * Capture actor used for translate world locations to map locations
   */
  mCachedMinimapCaptureActor: AFGMinimapCaptureActor;

  /**
   * Queue to handle clients waiting for fog of war transfer
   */
  mFogOfWarTransferQueue: FFogOfWarQueuePair[];

  /**
   * Actor representation manager to get representations updates to calculate fog of war data
   */
  mActorRepresentationManager: AFGActorRepresentationManager;

  /**
   * The currently active dynamic actor representations that reveal fog of war
   */
  mDynamicFogOfWarRevealActors: UFGActorRepresentation[];
}
