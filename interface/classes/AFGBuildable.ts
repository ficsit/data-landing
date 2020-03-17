import { IFGColorInterface } from '../interfaces/IFGColorInterface';
import { IFGDismantleInterface } from '../interfaces/IFGDismantleInterface';
import { IFGSaveInterface } from '../interfaces/IFGSaveInterface';
import { IFGUseableInterface } from '../interfaces/IFGUseableInterface';
import { AActor } from '../native/classes';
import { float, int32, localized, uint8 } from '../native/primitive';
import { classReference } from '../native/references';
import { LinearColor, Vector } from '../native/structs';
import { Unknown } from '../native/unknown';
import { FFactoryTickFunction } from '../structs/FFactoryTickFunction';
import { FNetConstructionID } from '../structs/FNetConstructionID';

import { AFGCharacterPlayer } from './AFGCharacterPlayer';
import { AFGHologram } from './AFGHologram';
import { UFGFactoryMaterialInstanceManager } from './UFGFactoryMaterialInstanceManager';
import { UFGInteractWidget } from './UFGInteractWidget';
import { UFGMaterialEffect_Build } from './UFGMaterialEffect_Build';
import { UFGRecipe } from './UFGRecipe';

export interface AFGBuildable
  extends AActor,
    IFGDismantleInterface,
    IFGSaveInterface,
    IFGColorInterface,
    IFGUseableInterface {
  /**
   * The hologram class to use for constructing this object.
   */
  mHologramClass: classReference<AFGHologram>;

  /**
   * The human readable display name of this object.
   */
  mDisplayName: localized;

  /**
   * The human readable description of this object.
   */
  mDescription: localized;

  /**
   * Max draw distance, inactive when < 0
   */
  MaxRenderDistance: float;

  /**
   * Vector used to determine highlight effects location
   */
  mHighlightVector: Vector;

  /**
   * Controls if we should receive Factory_Tick and how frequent.
   */
  mFactoryTickFunction: FFactoryTickFunction;

  /**
   * Map of colorable mesh materials to their respective colored factory material instance manager
   */
  mMaterialNameToInstanceManager: Record<string, UFGFactoryMaterialInstanceManager>;

  /**
   * The primary color of this buildable
   */
  mPrimaryColor: LinearColor;

  /**
   * The primary color of this buildable
   */
  mSecondaryColor: LinearColor;

  /**
   * The color slot of this buildable
   */
  mColorSlot: uint8;

  /**
   * What build effect to use when building this building
   */
  mBuildEffectTemplate: classReference<UFGMaterialEffect_Build>;

  /**
   * What build effect to use when dismantling this building
   */
  mDismantleEffectTemplate: classReference<UFGMaterialEffect_Build>;

  /**
   * Used to sync and start build effect on buildings when created, but not after creation. Set's to true when creating a building, turns off in the construction effect finish play.
   * [DavalliusA:Mon/01-04-2019] this is sett to null in default. If it's non null, we expect the build effects need to play.
   */
  mBuildEffectInstignator: AActor;

  /**
   * Name read from config
   */
  mDismantleEffectClassName: Unknown<'FSoftClassPath'>;

  /**
   * Name read from config
   */
  mBuildEffectClassName: Unknown<'FSoftClassPath'>;

  /**
   * Skip the build effect.
   */
  mSkipBuildEffect: boolean;

  /**
   * Build effect speed, a constant speed (distance over time) that the build effect should have, so bigger buildings take longer
   */
  mBuildEffectSpeed: float;

  /**
   * Whether or not this building should use ForceNetUpdate() when a player registers/unregisters from it.
   */
  mForceNetUpdateOnRegisterPlayer: boolean;

  /**
   * Name read from config
   */
  mHighlightParticleClassName: Unknown<'FStringClassReference'>;

  /**
   * Particle system component
   */
  mHighlightParticleSystemTemplate: Unknown<'UParticleSystem'>;

  /**
   * Particle system component
   */
  mHighlightParticleSystemComponent: Unknown<'UParticleSystemComponent'>;

  /**
   * If this building should show highlight before first use, save when it has been shown
   */
  mDidFirstTimeUse: boolean;

  /**
   * Should we show highlight when building this building
   */
  mShouldShowHighlight: boolean;

  mAllowCleranceSeparationEvenIfStackedOn: boolean;

  /**
   * Squared distance to closest camera
   */
  mCameraDistanceSq: float;

  /**
   * The building ID this belongs to.
   */
  mBuildingID: int32;

  /**
   * The widget that will present our UI.
   */
  mInteractWidgetClass: classReference<UFGInteractWidget>;

  /**
   * Players interacting with this building
   */
  mInteractingPlayers: AFGCharacterPlayer[];

  /**
   * If you can interact with this buildable.
   */
  mIsUseable: uint8;

  /**
   * ID given from server when constructed. Has not been assigned a value by server if 0.
   */
  mNetConstructionID: FNetConstructionID;

  /**
   * Recipe this building was built with, e.g. used for refunds and stats.
   */
  mBuiltWithRecipe: classReference<UFGRecipe>;

  /**
   * Time when this building was built
   */
  mBuildTimeStamp: float;

  /**
   * Caching the shape component once we have gotten it
   */
  mCachedShapeComponent: Unknown<'UShapeComponent'>;
}
