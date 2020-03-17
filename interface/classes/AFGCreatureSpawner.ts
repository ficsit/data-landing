import { float, int32 } from '../native/primitive';
import { classReference } from '../native/references';
import { Unknown } from '../native/unknown';
import { FSpawnData } from '../structs/FSpawnData';

import { AFGCreature } from './AFGCreature';
import { AFGSplinePath } from './AFGSplinePath';
import { UFGCreatureSpawnerDebugComponent } from './UFGCreatureSpawnerDebugComponent';

export interface AFGCreatureSpawner {
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

  mRandomSeed: int32;

  /**
   * How many days should pass before creatures start to respawn ( -1 means never )
   */
  mRespawnTimeIndays: int32;
}
