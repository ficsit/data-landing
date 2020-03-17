import { UTexture2D } from '../native/assets';
import { AActor } from '../native/classes';
import { classReference } from '../native/references';
import { Unknown } from '../native/unknown';

import { AFGHUDBase } from './AFGHUDBase';
import { AFGRenderTargetStage } from './AFGRenderTargetStage';
import { UFGGameUI } from './UFGGameUI';

export interface AFGHUD extends AFGHUDBase {
  mGameUIClass: classReference<Unknown<'UUserWidget'>>;

  mRespawnUIClass: classReference<Unknown<'UUserWidget'>>;

  mDefaultCrosshair: UTexture2D;

  mPickupCrosshair: UTexture2D;

  mVehicleCrosshair: UTexture2D;

  mWeaponCrosshair: UTexture2D;

  mWorkbenchCrosshair: UTexture2D;

  mBuildCrosshair: UTexture2D;

  mDismantleCrosshair: UTexture2D;

  mCustomCrosshair: UTexture2D;

  mGeneralCrosshair: UTexture2D;

  /**
   * Input component for blocking input during respawn
   */
  mRespawnInputComponent: Unknown<'UInputComponent'>;

  mRespawnUI: Unknown<'UUserWidget'>;

  mGameUI: UFGGameUI;

  /**
   * A world for previewing the current building
   */
  mPreviewBuildingWorld: Unknown<'UWorld'>;

  /**
   * Class that stages the preview building item
   */
  mPreviewStageClass: classReference<AFGRenderTargetStage>;

  /**
   * The actor class we want to preview, we don't use buildable as we want to support vehicles too
   */
  mPreviewActorClass: classReference<AActor>;

  /**
   * The latest created pawn HUD widget
   */
  mPawnHUD: Unknown<'UUserWidget'>;
}
