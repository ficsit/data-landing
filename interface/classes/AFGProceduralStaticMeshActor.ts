import { Unknown } from '../native/unknown';

export interface AFGProceduralStaticMeshActor extends Unknown<'AStaticMeshActor'> {
  /**
   * The foliage types that we want to be placed upon us
   */
  mFoliageTypes: Unknown<'UFoliageType'>[];
}
