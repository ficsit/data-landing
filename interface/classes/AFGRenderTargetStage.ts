import { int32, uint8 } from '../native/primitive';
import { Unknown } from '../native/unknown';

export interface AFGRenderTargetStage {
  /**
   * If we create a dynamic render target (that is, a new one every time), then this is it's x size
   */
  mDynamicRenderTargetSizeX: int32;

  /**
   * If we create a dynamic render target (that is, a new one every time), then this is it's y size
   */
  mDynamicRenderTargetSizeY: int32;

  /**
   * Set the pixel format of a dynamic rendertarget
   */
  mDynamicPixelFormat: Unknown<'EPixelFormat'>;

  /**
   * The scene captor component that will generate the result of our render target
   */
  mSceneCaptureComponent: Unknown<'USceneCaptureComponent2D'>;

  mStage: Unknown<'USceneComponent'>;

  /**
   * If true, then we create our own render target every time we want to play
   */
  mDynamicRenderTarget: uint8;
}
