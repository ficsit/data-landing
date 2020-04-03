import { AActor } from '../native/classes';
import { Unknown } from '../native/unknown';
import { FRemovedInstanceArray } from '../structs/FRemovedInstanceArray';

export interface AFGFoliageRemoval extends AActor, Unknown<'IFGSaveInterface'> {
  /**
   * Instances to remove, has custom "ReplicatedUsing", so we get a notify for each instance replicated
   */
  mRemovedInstances: FRemovedInstanceArray;

  /**
   * This needs to be a UPROPERTY as it will become null:ed when the level this actor is associated with is streamed out
   */
  mMeshComponent: Unknown<'UHierarchicalInstancedStaticMeshComponent'>;

  /**
   * The name of the level that this actor removes foliage from, so that the foliage system can find it
   */
  mLevelName: string;

  /**
   * The name of mesh component to use the level
   */
  mFoliageTypeName: string;

  /**
   * ServerOnly: The bounds of the level we have foliage in (@todo: Can we remove this savegame tag?)
   */
  mLevelBounds: Unknown<'FBox'>;
}
