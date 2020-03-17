import { float, int32 } from '../native/primitive';
import { classReference } from '../native/references';
import { Unknown } from '../native/unknown';

import { AFGAttentionPingActor } from './AFGAttentionPingActor';
import { AFGProximitySubsystem } from './AFGProximitySubsystem';
import { UFGConsoleCommandManager } from './UFGConsoleCommandManager';
import { UFGMapArea } from './UFGMapArea';
import { UFGMapAreaTexture } from './UFGMapAreaTexture';
import { UFGRemoteCallObject } from './UFGRemoteCallObject';

export interface AFGPlayerController {
  /**
   * Called when the shortcuts layout have changed, e.g. shortcut added.
   */
  OnShortcutsLayoutChanged: Unknown<'FOnShortcutsLayoutChanged'>;

  /**
   * Called when a shortcut has changed, e.g. activated or inactivated
   */
  OnShortcutChanged: Unknown<'FOnShortcutChanged'>;

  /**
   * Called when the player opens or closes the inventory
   */
  OnToggleInventory: Unknown<'FOnToggleInventory'>;

  /**
   * Called when the player opens or closes the inventory
   */
  OnToggleInteractionUI: Unknown<'FOnToggleInteractionUI'>;

  /**
   * Called when the pawn this controller is controlling enters a map area
   */
  MapAreaEntered: Unknown<'FPlayerEnteredAreaDelegate'>;

  /**
   * Called when the pawn this controller is controlling changes to other than nullPeter
   */
  PawnChanged: Unknown<'FPawnChangedDelegate'>;

  mDisabledInputGateChanged: Unknown<'FDisabledInputGateDelegate'>;

  /**
   * Indicates if this playercontroller should trigger sound volumes
   */
  mCanAffectAudioVolumes: boolean;

  /**
   * Object that manages non-cheat commands. Instantiated in shipping builds.
   */
  mConsoleCommandManager: UFGConsoleCommandManager;

  /**
   * The array of all remote call objects this player controller has
   */
  mRemoteCallObjects: UFGRemoteCallObject[];

  mInputComponentChords: Unknown<'UInputComponent'>;

  /**
   * The class of the attention ping actor we want to use
   */
  mAttentionPingActorClass: classReference<AFGAttentionPingActor>;

  /**
   * How often should we check which map area the pawn is in?
   */
  mMapAreaCheckInterval: float;

  /**
   * In what map area is our pawn right now ?
   */
  mCurrentMapArea: classReference<UFGMapArea>;

  mMovementWindComp: Unknown<'UAkComponent'>;

  /**
   * If we're currently in the state of respawning
   */
  mIsRespawning: boolean;

  /**
   * Cached info about the map areas
   */
  mCachedMapAreaTexture: UFGMapAreaTexture;

  /**
   * Did we died
   */
  mRespawnFromDeath: boolean;

  /**
   * Did we died
   */
  mRespawnFromJoin: boolean;

  mMinPhotoModeFOV: int32;

  mMaxPhotoModeFOV: int32;

  mPhotomodeInputComponent: Unknown<'UInputComponent'>;

  /**
   * Subsystem that keeps track of effects in proximity to the player
   */
  mProximitySubsystem: AFGProximitySubsystem;
}
