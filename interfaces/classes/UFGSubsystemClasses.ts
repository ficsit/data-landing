import { classReference } from '../native/references';

import { AFGAdminInterface } from './AFGAdminInterface';
import { AFGBuildableSubsystem } from './AFGBuildableSubsystem';
import { AFGCentralStorageSubsystem } from './AFGCentralStorageSubsystem';
import { AFGChatManager } from './AFGChatManager';
import { AFGCircuitSubsystem } from './AFGCircuitSubsystem';
import { AFGFoliageRemovalSubsystem } from './AFGFoliageRemovalSubsystem';
import { AFGGamePhaseManager } from './AFGGamePhaseManager';
import { AFGMapManager } from './AFGMapManager';
import { AFGProximitySubsystem } from './AFGProximitySubsystem';
import { AFGRadioactivitySubsystem } from './AFGRadioactivitySubsystem';
import { AFGRailroadSubsystem } from './AFGRailroadSubsystem';
import { AFGResearchManager } from './AFGResearchManager';
import { AFGResourceSinkSubsystem } from './AFGResourceSinkSubsystem';
import { AFGSchematicManager } from './AFGSchematicManager';
import { AFGStorySubsystem } from './AFGStorySubsystem';
import { AFGTimeOfDaySubsystem } from './AFGTimeOfDaySubsystem';
import { AFGTutorialIntroManager } from './AFGTutorialIntroManager';
import { AFGUnlockSubsystem } from './AFGUnlockSubsystem';
import { UFGSettings } from './UFGSettings';

export interface UFGSubsystemClasses extends UFGSettings {
  /**
   * The collection containing the world bounds
   */
  mStorySubsystemClass: classReference<AFGStorySubsystem>;

  /**
   * Subsystem to handle time of day.
   */
  mTimeSubsystemClass: classReference<AFGTimeOfDaySubsystem>;

  /**
   * Subsystem that handles the rail network, signals and all the trains in the game.
   */
  mRailroadSubsystemClass: classReference<AFGRailroadSubsystem>;

  /**
   * Subsystem that handles all the circuit simulations in the game, e.g. power grid.
   */
  mCircuitSubsystemClass: classReference<AFGCircuitSubsystem>;

  /**
   * Subsystem to handle all schematics and recipes in the game.
   */
  mSchematicManagerClass: classReference<AFGSchematicManager>;

  /**
   * Subsystem to handle the game phase.
   */
  mGamePhaseManagerClass: classReference<AFGGamePhaseManager>;

  /**
   * Subsystem to handle all research (M.A.M.) done in the game
   */
  mResearchManagerClass: classReference<AFGResearchManager>;

  /**
   * Subsystem to handle the tutorial.
   */
  mTutorialIntroManagerClass: classReference<AFGTutorialIntroManager>;

  /**
   * Subsystem that handles radioactivity in the world.
   */
  mRadioactivitySubsystemClass: classReference<AFGRadioactivitySubsystem>;

  /**
   * Subsystem that handles the chat messages.
   */
  mChatManagerClass: classReference<AFGChatManager>;

  /**
   * Subsystem that handles the central storage.
   */
  mCentralStorageSubsystemClass: classReference<AFGCentralStorageSubsystem>;

  /**
   * Subsystem that handles the map
   */
  mMapManagerClass: classReference<AFGMapManager>;

  /**
   * Subsystem to manage all the buildables in the game.
   */
  mBuildableSubsystemClass: classReference<AFGBuildableSubsystem>;

  /**
   * Subsystem used to remove foliage on the map.
   */
  mFoliageRemovalSubsystemClass: classReference<AFGFoliageRemovalSubsystem>;

  /**
   * Subsystem used to show effects near the player.
   */
  mProximitySubsystemClass: classReference<AFGProximitySubsystem>;

  /**
   * Subsystem responsible for handling unlocks
   */
  mUnlockSubsystem: classReference<AFGUnlockSubsystem>;

  /**
   * Subsystem that handles the resource sink system
   */
  mResourceSinkSubsystemClass: classReference<AFGResourceSinkSubsystem>;

  /**
   * Handles administration task of servers
   */
  mAdminInterfaceClass: classReference<AFGAdminInterface>;
}
