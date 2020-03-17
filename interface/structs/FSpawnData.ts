import { AFGCreature } from '../classes/AFGCreature';
import { int32 } from '../native/primitive';
import { classReference } from '../native/references';
import { Vector } from '../native/structs';

/**
 * Data we need to know/save about spawns in this spawner
 */
export interface FSpawnData {
  /**
   * Location where we want to spawn
   */
  SpawnLocation: Vector;

  /**
   * Reference to creature
   */
  Creature: AFGCreature;

  /**
   * We save if the creature was killed so we know if we want to respawn the creature when in range of the spawner
   */
  WasKilled: boolean;

  /**
   * What day we were killed ( -1 if we haven't been killed yet )
   */
  KilledOnDayNr: int32;

  /**
   * Overriden subclass of creature to spawn
   */
  CreatureClassOverride: classReference<AFGCreature>;
}
