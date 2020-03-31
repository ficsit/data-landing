import { float, int32 } from '../native/primitive';
import { Unknown } from '../native/unknown';

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
   * Distance for when we should activate a spawner
   */
  mActivateSpawnerDistance: float;

  /**
   * Indicates if we also want to disable pawn movement when we disable the AI
   */
  mDisablePawnMovement: boolean;

  /**
   * How many creatures can we iterate over per tick
   */
  mMaxCreatureIterationsPerTick: int32;

  /**
   * How many spawners can we iterate over per tick
   */
  mMaxSpawnerIterationsPerTick: int32;
}
