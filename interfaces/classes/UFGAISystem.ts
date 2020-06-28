import { IFGAggroTargetInterface } from '../interfaces/IFGAggroTargetInterface';
import { AActor } from '../native/classes';
import { float, int32 } from '../native/primitive';
import { ScriptInterface } from '../native/references';
import { Unknown } from '../native/unknown';
import { FSpawnerInfo } from '../structs/FSpawnerInfo';

import { AFGCharacterPlayer } from './AFGCharacterPlayer';
import { AFGCreature } from './AFGCreature';
import { AFGCreatureSpawner } from './AFGCreatureSpawner';

export interface UFGAISystem extends Unknown<'UAISystem'>, Unknown<'FTickableGameObject'> {
  /**
   * Called whenever a aggro target is added
   */
  mOnAggroTargetAdded: Unknown<'FAggroTargetAddedSignature'>;

  /**
   * Called whenever a aggro target is removed
   */
  mOnAggroTargetRemoved: Unknown<'FAggroTargetRemovedSignature'>;

  /**
   * distance for disabling an enemys AI
   */
  mDisableAIDistance: float;

  /**
   * distance when we switch movement mode on creatures to PHYS_NavWalking
   */
  mNavWalkingDistance: float;

  /**
   * distance when we completely remove ticking on mesh
   */
  mMeshTickEnableDistance: float;

  /**
   * distance when we switch tick mode on mesh to Tick Only when Rendered
   */
  mMeshUpdateDistance: float;

  /**
   * Distance for when we should activate a spawner, this distance is used if the spawner does not specify a custom distance
   */
  mActivateSpawnerDistance: float;

  /**
   * Indicates if we also want to disable pawn movement when we disable the AI
   */
  mDisablePawnMovement: boolean;

  /**
   * Cached list of all aggro targets, not guaranteed to have the same order
   */
  mAllAggroTargets: ScriptInterface<IFGAggroTargetInterface>[];

  /**
   * Cached list of all enemies, used for optimizing enemies depending on distance
   */
  mAllCreatures: AFGCreature[];

  /**
   * Cached list of all players, used for checking distance to all enemies
   */
  mAllPlayers: AFGCharacterPlayer[];

  /**
   * Cached list of all enemy spawners. Used to spawn enemies based on distance to player
   */
  mAllCreatureSpawners: AFGCreatureSpawner[];

  /**
   * Actors that have been given pardon from being targeted by enemies
   */
  mPardonedActors: AActor[];

  /**
   * Cached list of creature spawners that are trying to activate
   */
  mPendingActiveSpawners: AFGCreatureSpawner[];

  /**
   * How many creatures can we iterate over per tick
   */
  mMaxCreatureIterationsPerTick: int32;

  /**
   * How many spawners can we iterate over per tick
   */
  mMaxSpawnerIterationsPerTick: int32;

  /**
   * Spawners that want to spawn
   */
  mPotentialSpawnersInfo: FSpawnerInfo[];

  /**
   * Total weight of spawners that can be active, by default one creature will add 1.0f to a spawners weight
   */
  mMaxSpawnWeight: float;

  /**
   * Minimum distance to a spawner for it to be able to spawn.
   */
  mMinSpawnDistance: float;

  /**
   * If a creature is withing this distance to an active player then it should not despawn
   */
  mKeepAliveDistanceToPlayer: float;
}
