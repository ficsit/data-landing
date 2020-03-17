import { UTexture2D } from '../native/assets';
import { int32, uint8 } from '../native/primitive';
import { Color } from '../native/structs';
import { FColorMapAreaPair } from '../structs/FColorMapAreaPair';

import { AFGGameState } from './AFGGameState';
import { AFGMinimapCaptureActor } from './AFGMinimapCaptureActor';

export interface UFGMapAreaTexture {
  /**
   * This is the texture that the level designers made to define areas on the map
   */
  mAreaTexture: UTexture2D;

  /**
   * The current fog of war is generated to this texture
   */
  mFogOfWarTexture: UTexture2D;

  /**
   * This is where we store the raw data we generated from the texture
   */
  mAreaData: uint8[];

  /**
   * This are all the unique colors found in the texture
   */
  mColorPalette: Color[];

  mColorToArea: FColorMapAreaPair[];

  /**
   * A cached camera in the Skye
   */
  mCaptureActor: AFGMinimapCaptureActor;

  /**
   * The width of the data and the texture
   */
  mDataWidth: int32;

  mCachedGameState: AFGGameState;
}
