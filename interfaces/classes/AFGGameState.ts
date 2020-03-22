import { IFGSaveInterface } from '../interfaces/IFGSaveInterface';
import { float, int32 } from '../native/primitive';
import { classReference } from '../native/references';
import { Unknown } from '../native/unknown';
import { FFGBuildingColorSlotStruct } from '../structs/FFGBuildingColorSlotStruct';

import { AFGActorRepresentationManager } from './AFGActorRepresentationManager';
import { AFGCentralStorageSubsystem } from './AFGCentralStorageSubsystem';
import { AFGChatManager } from './AFGChatManager';
import { AFGCircuitSubsystem } from './AFGCircuitSubsystem';
import { AFGGamePhaseManager } from './AFGGamePhaseManager';
import { AFGMapManager } from './AFGMapManager';
import { AFGPipeSubsystem } from './AFGPipeSubsystem';
import { AFGRadioactivitySubsystem } from './AFGRadioactivitySubsystem';
import { AFGRailroadSubsystem } from './AFGRailroadSubsystem';
import { AFGRecipeManager } from './AFGRecipeManager';
import { AFGResearchManager } from './AFGResearchManager';
import { AFGResourceSinkSubsystem } from './AFGResourceSinkSubsystem';
import { AFGSchematicManager } from './AFGSchematicManager';
import { AFGStorySubsystem } from './AFGStorySubsystem';
import { AFGTimeOfDaySubsystem } from './AFGTimeOfDaySubsystem';
import { AFGTutorialIntroManager } from './AFGTutorialIntroManager';
import { AFGUnlockSubsystem } from './AFGUnlockSubsystem';
import { UFGItemDescriptor } from './UFGItemDescriptor';
import { UFGMapArea } from './UFGMapArea';
import { UFGMessageBase } from './UFGMessageBase';
import { UFGRecipe } from './UFGRecipe';

export interface AFGGameState extends Unknown<'AGameState'>, IFGSaveInterface {
  /**
   * Called on all players when any player enters a new map area.
   */
  MapAreaVisistedDelegate: Unknown<'FVisitedMapAreaDelegate'>;

  /**
   * @todo When was this used last time? Cleanup?
   */
  mTurboModeMultiplier: float;

  /**
   * Message sent when a power fuse is triggered occurs.
   */
  mPowerCircuitFuseTriggeredMessage: classReference<UFGMessageBase>;

  /**
   * @todo @save 2019-02-26 If this is cleaned up alpha saves will lose recipes unlocked by other means than through schematics, i.e. probably alternate recipes.
   * _DEPRECATED
   */
  mAvailableRecipes: classReference<UFGRecipe>[];

  /**
   * Spawned subsystems
   */
  mTimeSubsystem: AFGTimeOfDaySubsystem;

  mStorySubsystem: AFGStorySubsystem;

  mRailroadSubsystem: AFGRailroadSubsystem;

  mCircuitSubsystem: AFGCircuitSubsystem;

  mRecipeManager: AFGRecipeManager;

  mSchematicManager: AFGSchematicManager;

  mGamePhaseManager: AFGGamePhaseManager;

  mResearchManager: AFGResearchManager;

  mTutorialIntroManager: AFGTutorialIntroManager;

  mActorRepresentationManager: AFGActorRepresentationManager;

  mMapManager: AFGMapManager;

  mRadioactivitySubsystem: AFGRadioactivitySubsystem;

  mChatManager: AFGChatManager;

  mCentralStorageSubsystem: AFGCentralStorageSubsystem;

  mPipeSubsystem: AFGPipeSubsystem;

  mUnlockSubsystem: AFGUnlockSubsystem;

  mResourceSinkSubsystem: AFGResourceSinkSubsystem;

  /**
   * This array keeps track of what map areas have been visited this game
   */
  mVisitedMapAreas: classReference<UFGMapArea>[];

  /**
   * All items we have picked up that also are relevant to know if we picked up
   */
  mPickedUpItems: classReference<UFGItemDescriptor>[];

  /**
   * The total play time when loaded this save
   */
  mPlayDurationWhenLoaded: int32;

  mReplicatedSessionName: string;

  mBuildingColorSlots: FFGBuildingColorSlotStruct;

  /**
   * Next time the server is planned to restart
   */
  mPlannedRestartTime: float;

  /**
   * Called at regular times when the restart time reaches specific thresholds
   */
  mOnRestartTimeNotification: Unknown<'FOnRestartTimeNotification'>;

  /**
   * Class used to construct the hub, this is used to guarantee players always have one if they don't have a hub
   */
  mHubPartClass: classReference<UFGItemDescriptor>;

  /**
   * Track if a hub part is needed for adding to player inventory when they respawn
   */
  mForceAddHubPartOnSpawn: boolean;

  /**
   * Cheat bool for having no cost for stuff
   */
  mCheatNoCost: boolean;

  /**
   * Cheat bool for not requiring power
   */
  mCheatNoPower: boolean;

  /**
   * There can only be one trading post in the game, so we keep track it here so that we also can replicate it to client
   */
  mIsTradingPostBuilt: boolean;

  /**
   * The first time you build a trading post we want the landing animation to play
   */
  mHasInitalTradingPostLandAnimPlayed: boolean;

  /**
   * There can only be one tow truck in the game, so we keep track it here so that we also can replicate it to client
   */
  mIsSpaceElevatorBuilt: boolean;
}
