import { AActor } from '../native/classes';
import { float, int32 } from '../native/primitive';
import { FDebrisActor } from '../structs/FDebrisActor';
import { FDebrisItemDrop } from '../structs/FDebrisItemDrop';
import { FDebrisMesh } from '../structs/FDebrisMesh';
import { FSimulatedActorTransform } from '../structs/FSimulatedActorTransform';
import { FSimulatedItemDropTransform } from '../structs/FSimulatedItemDropTransform';
import { FSimulatedMeshTransform } from '../structs/FSimulatedMeshTransform';

export interface AFGCrashSiteDebris {
  /**
   * Description of which meshes to spawn.
   */
  mDebrisMeshes: FDebrisMesh[];

  /**
   * Description of which actors to spawn.
   */
  mDebrisActors: FDebrisActor[];

  /**
   * Description of which parts to spawn.
   */
  mItemDrops: FDebrisItemDrop[];

  /**
   * How many item drops to place, debris must be resimulated when this is updated.
   */
  mNumItemDrops: int32;

  /**
   * How far up to spawn the debris.
   */
  mSpawnAltitude: float;

  /**
   * If we want the debris to spread a bit more.
   */
  mSpawnRadiusMultiplier: float;

  /**
   * How much the parts should penetrate the ground.
   */
  mDebrisPenetrateGroundByPercentage: float;

  /**
   * Maximum distance from the center debris can end up, debris outside this radius is destroyed.
   */
  mDespawnRadius: float;

  /**
   * If true debris will be respawned next simulation.
   */
  mRegenerateDebrisNextSimulation: boolean;

  /**
   * Actors spawned by this crash site.
   */
  mSavedSimulatedDebrisActors: AActor[];

  mSavedSimulatedItemDropActors: AActor[];

  /**
   * Transforms saved during physics simulation.
   */
  mSavedMeshSimulationData: FSimulatedMeshTransform[];

  mSavedActorSimulationData: FSimulatedActorTransform[];

  mSavedItemDropSimulationData: FSimulatedItemDropTransform[];
}
