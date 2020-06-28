import { IFGSaveInterface } from '../interfaces/IFGSaveInterface';
import { AActor } from '../native/classes';
import { float, int32 } from '../native/primitive';
import { classReference } from '../native/references';
import { Unknown } from '../native/unknown';
import { FSpawnData } from '../structs/FSpawnData';

import { AFGCreature } from './AFGCreature';
import { AFGSplinePath } from './AFGSplinePath';
import { UFGCreatureSpawnerDebugComponent } from './UFGCreatureSpawnerDebugComponent';

export interface AFGCreatureSpawner extends AActor, IFGSaveInterface {
  /**
   * For showing a preview of what will happen in the editor
   */
  mDebugComponent: UFGCreatureSpawnerDebugComponent;

  mEditorSprite: Unknown<'UBillboardComponent'>;

  mCapsuleComponent: Unknown<'UCapsuleComponent'>;

  /**
   * The creature we should spawn
   */
  mCreatureClass: classReference<AFGCreature>;

  /**
   * The number of enemies to spawn, used offline
   */
  mNumberOfCreatures: Unknown<'FInt32Interval'>;

  /**
   * Within what radius do you want to spawn the enemies (the won't go outside of this radius)
   */
  mSpawnRadius: float;

  /**
   * How much up/down our spawner tries to search for a placeable location
   */
  mSpawnHalfHeight: float;

  /**
   * Indicates if we have spawned our enemies
   */
  mIsActive: boolean;

  /**
   * Structure for keeping all data saved about enemies spawned
   */
  mSpawnData: FSpawnData[];

  /**
   * Path splines that enemies in this spawner should set to follow
   */
  mSplines: AFGSplinePath[];

  /**
   * cached value to see if spawner is near a base
   */
  mCachedIsNearBase: boolean;

  /**
   * cached value for what distance to activate this spawner on. Less than zero means we use AISystems default
   */
  mSpawnerDistance: float;

  /**
   * Indicates that this spawner has been deactivated and want to destroy its creatures
   */
  mIsPendingDestroy: boolean;

  /**
   * Indicates that this spawner has been activated and want to spawn its creatures
   */
  mIsPendingSpawn: boolean;

  /**
   * Indicates how far into mSpawnData we have gotten with spawning -1 means that no spawning should occur
   */
  mCurrentCreatureToSpawnIndex: int32;

  mPendingDestroyTimer: Unknown<'FTimerHandle'>;

  /**
   * Is this spawner a monster closet? (spawning one creature at a time )
   */
  mIsMonsterCloset: boolean;

  /**
   * Delay in seconds when next creature spawns after current creature died
   */
  mMonsterClosetSpawnDelay: float;

  /**
   * Timer handle for monster closet spawning
   */
  mMonsterClosetTimerHandle: Unknown<'FTimerHandle'>;

  /**
   * This spawn distance will override both the one set in creature and the one in aisystem
   */
  mSpawnDistanceOverride: float;

  mRandomSeed: int32;

  /**
   * Should this spawner draw a sphere showing its spawn distance in editor
   */
  mVisualizeSpawnDistance: boolean;

  /**
   * How many days should pass before creatures start to respawn ( -1 means never )
   */
  mRespawnTimeIndays: int32;
}
