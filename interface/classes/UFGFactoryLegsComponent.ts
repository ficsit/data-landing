import { IFGSaveInterface } from '../interfaces/IFGSaveInterface';
import { UStaticMesh } from '../native/assets';
import { float } from '../native/primitive';
import { Unknown } from '../native/unknown';
import { FFeetOffset } from '../structs/FFeetOffset';

export interface UFGFactoryLegsComponent extends Unknown<'USceneComponent'>, IFGSaveInterface {
  /**
   * Socket names on the parent mesh
   */
  mLegSocketNames: string[];

  /**
   * The mesh to be used as legs on factories
   */
  mLegMeshOverride: UStaticMesh;

  /**
   * The mesh to be used as foots on factories
   */
  mFootMeshOverride: UStaticMesh;

  /**
   * The maximum length the legs can be.
   */
  mMaxLegLengthOverride: float;

  /**
   * The created leg components for this building
   */
  mLegMeshComponents: Unknown<'UStaticMeshComponent'>[];

  /**
   * The created foot components for this building
   */
  mFootMeshComponents: Unknown<'UStaticMeshComponent'>[];

  /**
   * Stored so that we know the offset of the feet
   */
  mCachedFeetOffset: FFeetOffset[];
}
